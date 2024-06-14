module.exports = async function(input) {
    const result = [];

    async function findFiles(input) {
        const size = await new Promise((resolve) => {
            input.size((size) => {
                resolve(size);
            });
        });

        for (let i = 0; i < size; i++) {
            const file = await new Promise((resolve) => {
                input.read(i, (file) => {
                    resolve(file);
                });
            });

            if (file !== null && file !== undefined) {
                if (typeof(file) === 'string') {
                    if(file.length !== (new Set(...file.split())).size) result.push(file);
                } else if ("size" in file) {
                    await findFiles(file);
                }
            }
        }
    }

    await findFiles(input);
    return result.sort();
}