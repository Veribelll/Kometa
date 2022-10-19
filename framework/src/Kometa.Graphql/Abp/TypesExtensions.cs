using Kometa.MultiContractor.Current;
using Volo.Abp;
using Volo.Abp.Auditing;
using Volo.Abp.Domain.Entities;
using Volo.Abp.MultiTenancy;

namespace Kometa.Graphql.Abp;

public static class TypesExtensions
{
    public static IInterfaceTypeDescriptor<T> Entity<T>(this IInterfaceTypeDescriptor<T> descriptor)
        where T : IEntity<Guid>
    {
        descriptor.Implements<NodeType>();
        descriptor.Implements<EntityType>();

        descriptor
            .Field(x => x.Id)
            .Type<NonNullType<IdType>>();

        return descriptor;
    }

    public static IObjectTypeDescriptor<T> Entity<T>(this IObjectTypeDescriptor<T> descriptor, string? typeName = null)
        where T : IEntity<Guid>
    {
        descriptor.Implements<NodeType>();
        descriptor.Implements<EntityType>();

        descriptor
            .Field(x => x.Id)
            .IsProjected()
            .ID(typeName ?? typeof(T).Name);

        return descriptor;
    }

    public static IInterfaceTypeDescriptor<T> MayHaveCreator<T>(this IInterfaceTypeDescriptor<T> descriptor)
        where T : IMayHaveCreator
    {
        descriptor.Implements<MayHaveCreatorType>();
        return descriptor;
    }

    public static IObjectTypeDescriptor<T> MayHaveCreator<T>(this IObjectTypeDescriptor<T> descriptor)
        where T : IMayHaveCreator
    {
        descriptor.Implements<MayHaveCreatorType>();
        descriptor
            .Field(x => x.CreatorId)
            .IsProjected()
            .ID("IdentityUser");
        return descriptor;
    }

    public static IInterfaceTypeDescriptor<T> HasCreationTime<T>(this IInterfaceTypeDescriptor<T> descriptor)
        where T : IHasCreationTime
    {
        descriptor.Implements<HasCreationTimeType>();
        return descriptor;
    }

    public static IObjectTypeDescriptor<T> HasCreationTime<T>(this IObjectTypeDescriptor<T> descriptor)
        where T : IHasCreationTime
    {
        descriptor.Implements<HasCreationTimeType>();
        descriptor
            .Field(x => x.CreationTime)
            .Type<DateTimeType>();
        return descriptor;
    }

    public static IInterfaceTypeDescriptor<T> CreationAudited<T>(this IInterfaceTypeDescriptor<T> descriptor)
        where T : ICreationAuditedObject
    {
        descriptor.MayHaveCreator();
        descriptor.HasCreationTime();
        descriptor.Implements<CreationAuditedType>();
        return descriptor;
    }

    public static IObjectTypeDescriptor<T> CreationAudited<T>(this IObjectTypeDescriptor<T> descriptor)
        where T : ICreationAuditedObject
    {
        descriptor.MayHaveCreator();
        descriptor.HasCreationTime();
        descriptor.Implements<CreationAuditedType>();
        return descriptor;
    }

    public static IInterfaceTypeDescriptor<T> HasModificationTime<T>(this IInterfaceTypeDescriptor<T> descriptor)
        where T : IHasModificationTime
    {
        descriptor.Implements<HasModificationTimeType>();
        return descriptor;
    }

    public static IObjectTypeDescriptor<T> HasModificationTime<T>(this IObjectTypeDescriptor<T> descriptor)
        where T : IHasModificationTime
    {
        descriptor.Implements<HasModificationTimeType>();
        descriptor
            .Field(x => x.LastModificationTime)
            .Type<DateTimeType>();
        return descriptor;
    }

    public static IInterfaceTypeDescriptor<T> ModificationAudited<T>(this IInterfaceTypeDescriptor<T> descriptor)
        where T : IModificationAuditedObject
    {
        descriptor.HasModificationTime();
        descriptor.Implements<ModificationAuditedType>();
        return descriptor;
    }

    public static IObjectTypeDescriptor<T> ModificationAudited<T>(this IObjectTypeDescriptor<T> descriptor)
        where T : IModificationAuditedObject
    {
        descriptor.HasModificationTime();

        descriptor.Implements<ModificationAuditedType>();

        descriptor
            .Field(x => x.LastModifierId)
            .IsProjected()
            .ID("IdentityUser");
        return descriptor;
    }

    public static IInterfaceTypeDescriptor<T> SoftDelete<T>(this IInterfaceTypeDescriptor<T> descriptor)
        where T : ISoftDelete
    {
        descriptor.Implements<SoftDeleteType>();
        return descriptor;
    }

    public static IObjectTypeDescriptor<T> SoftDelete<T>(this IObjectTypeDescriptor<T> descriptor)
        where T : ISoftDelete
    {
        descriptor.Implements<SoftDeleteType>();

        descriptor
            .Field(x => x.IsDeleted)
            .IsProjected()
            .Type<NonNullType<BooleanType>>();
        return descriptor;
    }

    public static IInterfaceTypeDescriptor<T> HasDeletionTime<T>(this IInterfaceTypeDescriptor<T> descriptor)
        where T : IHasDeletionTime
    {
        descriptor.SoftDelete();

        descriptor.Implements<HasDeletionTimeType>();
        return descriptor;
    }

    public static IObjectTypeDescriptor<T> HasDeletionTime<T>(this IObjectTypeDescriptor<T> descriptor)
        where T : IHasDeletionTime
    {
        descriptor.SoftDelete();

        descriptor.Implements<HasDeletionTimeType>();

        descriptor
            .Field(x => x.DeletionTime)
            .Type<DateTimeType>();
        return descriptor;
    }

    public static IInterfaceTypeDescriptor<T> DeletionAudited<T>(this IInterfaceTypeDescriptor<T> descriptor)
        where T : IDeletionAuditedObject
    {
        descriptor.HasDeletionTime();

        descriptor.Implements<DeletionAuditedType>();
        return descriptor;
    }

    public static IObjectTypeDescriptor<T> DeletionAudited<T>(this IObjectTypeDescriptor<T> descriptor)
        where T : IDeletionAuditedObject
    {
        descriptor.HasDeletionTime();

        descriptor.Implements<DeletionAuditedType>();

        descriptor
            .Field(x => x.DeleterId)
            .IsProjected()
            .ID("IdentityUser");
        return descriptor;
    }

    public static IInterfaceTypeDescriptor<T> Audited<T>(this IInterfaceTypeDescriptor<T> descriptor)
        where T : IAuditedObject
    {
        descriptor.CreationAudited();
        descriptor.ModificationAudited();
        return descriptor;
    }

    public static IObjectTypeDescriptor<T> Audited<T>(this IObjectTypeDescriptor<T> descriptor)
        where T : IAuditedObject
    {
        descriptor.CreationAudited();
        descriptor.ModificationAudited();
        return descriptor;
    }

    public static IInterfaceTypeDescriptor<T> FullAudited<T>(this IInterfaceTypeDescriptor<T> descriptor)
        where T : IFullAuditedObject
    {
        descriptor.Audited();
        descriptor.DeletionAudited();
        return descriptor;
    }

    public static IObjectTypeDescriptor<T> FullAudited<T>(this IObjectTypeDescriptor<T> descriptor)
        where T : IFullAuditedObject
    {
        descriptor.Audited();
        descriptor.DeletionAudited();
        return descriptor;
    }

    public static IInterfaceTypeDescriptor<T> MultiTenant<T>(this IInterfaceTypeDescriptor<T> descriptor)
        where T : IMultiTenant
    {
        descriptor.Implements<MultiTenantType>();
        return descriptor;
    }

    public static IObjectTypeDescriptor<T> MultiTenant<T>(this IObjectTypeDescriptor<T> descriptor)
        where T : IMultiTenant
    {
        descriptor.Implements<MultiTenantType>();
        descriptor
            .Field(x => x.TenantId)
            .IsProjected()
            .ID("Tenant");
        return descriptor;
    }

    public static IInterfaceTypeDescriptor<T> MultiContractor<T>(this IInterfaceTypeDescriptor<T> descriptor)
        where T : IMultiContractor
    {
        descriptor.Implements<MultiContractorType>();
        return descriptor;
    }

    public static IObjectTypeDescriptor<T> MultiContractor<T>(this IObjectTypeDescriptor<T> descriptor)
        where T : IMultiContractor
    {
        descriptor.Implements<MultiContractorType>();
        descriptor
            .Field(x => x.ContractorId)
            .IsProjected()
            .ID("Contractor");
        return descriptor;
    }
}