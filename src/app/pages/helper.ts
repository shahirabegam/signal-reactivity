export type User = {
    name: string;
    status: string;
}

export function getUsers(): User[] {
    return [
        { name: 'Alice', status: 'active' },
        { name: 'Bob', status: 'inactive' },
        { name: 'Charlie', status: 'active' },
        { name: 'David', status: 'inactive' }
    ];
};