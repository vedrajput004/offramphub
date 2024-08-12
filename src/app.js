document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', e => {
        const rect = btn.getBoundingClientRect();
        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;
        const span = btn.querySelector('span');
        if (span) {
            span.style.top = `${relY}px`;
            span.style.left = `${relX}px`;
        }
    });

    btn.addEventListener('mouseout', e => {
        const rect = btn.getBoundingClientRect();
        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;
        const span = btn.querySelector('span');
        if (span) {
            span.style.top = `${relY}px`;
            span.style.left = `${relX}px`;
        }
    });
});


