import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';

const NavBar = () => {
    const items = [
        {
            label: 'Projects',
            icon: 'pi pi-fw pi-briefcase',
            command: () => { window.location.hash = "/projects"; }
        },
        {
            label: 'Contact',
            icon: 'pi pi-fw pi-envelope',
            command: () => { window.location.hash = "/contact"; }
        }
    ];

    const end = <Button label="Launch App" icon="pi pi-user-plus" />;

    return (
        <div>
            <div className="card">
                <Menubar model={items} end={end} />
            </div>
        </div>
    );
}

export default NavBar;
