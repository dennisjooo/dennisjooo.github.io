import { useState, useEffect } from 'react';

type TabType = 'projects' | 'certifications';

export function useTabState() {
    const [activeTab, setActiveTab] = useState<TabType>('projects');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const fromNav = sessionStorage.getItem('fromNav') === 'true';
        if (fromNav) {
            sessionStorage.removeItem('fromNav');
            sessionStorage.removeItem('projectsActiveTab');
            setActiveTab('projects');
        } else {
            const storedTab = sessionStorage.getItem('projectsActiveTab') as TabType;
            if (storedTab && (storedTab === 'projects' || storedTab === 'certifications')) {
                setActiveTab(storedTab);
            }
        }
        requestAnimationFrame(() => setMounted(true));
    }, []);

    useEffect(() => {
        if (mounted) {
            sessionStorage.setItem('projectsActiveTab', activeTab);
        }
    }, [activeTab, mounted]);

    return {
        activeTab,
        setActiveTab,
        mounted
    };
} 