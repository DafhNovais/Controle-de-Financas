const loadRegisters = () => {
    return fetch(`http://localhost:3004/finance-register`)
        .then(reply => {
            return reply.json();
        });
}

export const clientService = {
    loadRegisters
}
