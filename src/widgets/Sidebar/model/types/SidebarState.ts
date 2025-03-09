import React from "react";

export interface SidebarItem {
    path: string;
    label: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    activeIcon: React.FC<React.SVGProps<SVGSVGElement>>;
}
