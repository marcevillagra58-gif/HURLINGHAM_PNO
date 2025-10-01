function attachPageSpecificListeners(currentPage, appContainer) {
    console.log('Attaching page specific listeners for', currentPage);

    // Attach listeners for all navigation buttons with data-target
    const navButtons = appContainer.querySelectorAll('.nav-btn');
    navButtons.forEach(button => {
        // Use a flag to avoid adding the same listener multiple times
        if (!button.dataset.listenerAttached) {
            button.addEventListener('click', () => {
                const targetId = button.getAttribute('data-target');
                window.loadPage(targetId);
            });
            button.dataset.listenerAttached = 'true';
        }
    });

    // Listeners specific to page2 (map hotspots and modals)
    if (currentPage === 'page2') {
        const hotspots = appContainer.querySelectorAll('.hotspot');
        const infoModals = appContainer.querySelectorAll('.info-modal');
        const closeButtons = appContainer.querySelectorAll('.close-btn');

        function hideAllModals() {
            infoModals.forEach(modal => {
                modal.classList.remove('show');
            });
        }

        hotspots.forEach(hotspot => {
            hotspot.addEventListener('click', () => {
                hideAllModals();
                const targetModalId = hotspot.getAttribute('data-target');
                const targetModal = appContainer.querySelector(`#${targetModalId}`);
                if (targetModal) {
                    targetModal.classList.add('show');
                }
            });
        });

        closeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const modalToClose = button.closest('.info-modal');
                if (modalToClose) {
                    modalToClose.classList.remove('show');
                }
            });
        });

        // Note: The window click listener for modals is now managed in onepage.js
        // to avoid re-attaching it on every page load.
    }
}