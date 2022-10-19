using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Identity;
using Volo.Abp.MultiTenancy;
using Volo.Abp.Settings;
using Volo.Abp.Threading;
using IdentityUser = Volo.Abp.Identity.IdentityUser;

namespace Smde.Identity
{
    [Dependency(ReplaceServices = true)]
    public class SmdeIdentityUserManager : IdentityUserManager
    {
        protected readonly IDataFilter DataFilter;

        public SmdeIdentityUserManager(
            IdentityUserStore store,
            IIdentityRoleRepository roleRepository,
            IIdentityUserRepository userRepository,
            IOptions<IdentityOptions> optionsAccessor,
            IPasswordHasher<IdentityUser> passwordHasher,
            IEnumerable<IUserValidator<IdentityUser>> userValidators,
            IEnumerable<IPasswordValidator<IdentityUser>> passwordValidators,
            ILookupNormalizer keyNormalizer,
            IdentityErrorDescriber errors,
            IServiceProvider services,
            ILogger<SmdeIdentityUserManager> logger,
            ICancellationTokenProvider cancellationTokenProvider,
            IOrganizationUnitRepository organizationUnitRepository,
            ISettingProvider settingProvider,
            IDataFilter dataFilter) :
            base(store, roleRepository, userRepository, optionsAccessor, passwordHasher, userValidators,
                passwordValidators, keyNormalizer, errors, services, logger, cancellationTokenProvider,
                organizationUnitRepository, settingProvider)
        {
            DataFilter = dataFilter;
        }

        public override async Task<IdentityResult> CreateAsync(IdentityUser user)
        {
            await CheckEmailAsync(user.Email);
            return await base.CreateAsync(user);
        }

        public override async Task<IdentityResult> ChangeEmailAsync(IdentityUser user, string newEmail, string token)
        {
            if (user.NormalizedEmail == NormalizeEmail(newEmail))
            {
                return IdentityResult.Success;
            }

            await CheckEmailAsync(newEmail);
            return await base.ChangeEmailAsync(user, newEmail, token);
        }

        private async Task CheckEmailAsync(string email)
        {
            using (DataFilter.Disable<IMultiTenant>())
            {
                var user = await UserRepository.FindByNormalizedEmailAsync(NormalizeEmail(email));
                if (user is not null)
                {
                    throw new IdentityUserEmailAlreadyExistsException(email);
                }
            }
        }
    }
}