import { useState, useEffect } from 'react';
import { getSessionItem, removeSessionItem, setSessionItem } from '@/lib/utils/storage';

type TabType = 'projects' | 'certifications';

export function useTabState() {
    const [activeTab, setActiveTab] = useState<TabType>('projects');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const fromNav = getSessionItem('fromNav') === 'true';
        if (fromNav) {
            removeSessionItem('fromNav');
            removeSessionItem('projectsActiveTab');
            setActiveTab('projects');
        } else {
            const storedTab = getSessionItem('projectsActiveTab') as TabType | null;
            if (storedTab && (storedTab === 'projects' || storedTab === 'certifications')) {
                setActiveTab(storedTab);
            }
        }
        requestAnimationFrame(() => setMounted(true));
    }, []);

    useEffect(() => {
        if (mounted) {
            setSessionItem('projectsActiveTab', activeTab);
        }
    }, [activeTab, mounted]);

    return {
        activeTab,
        setActiveTab,
        mounted
    };
} 
