using System.Collections;
using Volo.Abp.Domain.Entities;

namespace Smde.LastMiles.Postamats.Controllers;

public class ControllersList : IReadOnlyList<ControllerBase>
{
    protected readonly List<ControllerBase> Items;
    protected readonly Postamat Postamat;

    public ControllersList(List<ControllerBase> items, Postamat postamat)
    {
        Items = items;
        Postamat = postamat;
    }

    #region Promix

    public PromixController GetPromix(Guid id)
    {
        var controller = Get(id);

        if (controller is not PromixController promix)
        {
            throw new EntityNotFoundException();
        }

        return promix;
    }

    public PromixController AddPromix(Guid id, string name, SerialPortSettings settings)
    {
        CheckName(name);

        var controller = new PromixController(
            id,
            Postamat.TenantId,
            Postamat.ContractorId,
            Postamat.Id,
            name,
            settings);
        Items.Add(controller);
        return controller;
    }

    #endregion
    
    public ControllerBase Get(Guid id) => Items.First(x => x.Id == id);

    public Lock GetLock(Guid lockId) => GetAllLocks().First(x => x.Id == lockId);

    public ICollection<Lock> GetAllLocks() => Items.SelectMany(x => x.Locks).ToList();

    public ControllerBase SetName(Guid id, string name)
    {
        var controller = Get(id);

        if (controller.Name == name)
        {
            return controller;
        }
        
        CheckName(name);
        controller.SetName(name);
        return controller;
    }

    public ControllerBase SetSettings(Guid id, SerialPortSettings settings)
    {
        var controller = Get(id);
        controller.Settings = settings;
        return controller;
    }

    public ControllerBase Remove(Guid id)
    {
        var controller = Get(id);
        Items.Remove(controller);
        controller.ClearLocks();
        return controller;
    }

    public void Clear() => Items.Clear();
    
    private void CheckName(string name)
    {
        if (Items.Any(x=>x.Name == name))
        {
            throw new Exception();
        }
    }
    
    public int Count => Items.Count;
    public ControllerBase this[int index] => Items[index];
    public IEnumerator<ControllerBase> GetEnumerator() => Items.GetEnumerator();
    IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
}