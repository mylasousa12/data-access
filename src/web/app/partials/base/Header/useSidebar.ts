interface UseSidebarReturn {
    isSidebarOpen: Ref<boolean>
    openSidebar: () => void
    closeSidebar: () => void
    toggleSidebar: () => void
}

const isSidebarOpen = ref<boolean>(false);

export function useSidebar(): UseSidebarReturn {
    function openSidebar(): void {
        isSidebarOpen.value = true
    }

    function closeSidebar(): void {
        isSidebarOpen.value = false
    }

    function toggleSidebar():void {
        isSidebarOpen.value = !isSidebarOpen.value
    }

    return {
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        toggleSidebar
    }
}