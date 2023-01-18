import { DrawerOptions } from './DrawerOptions';

export type DrawerContextData = {
    isDrawerOpen: boolean,
    toggleDrawer: () => void,
    drawerOptions: DrawerOptions[],
    toggleDrawerOptions: (newDrawerOptions: DrawerOptions[]) => void
}