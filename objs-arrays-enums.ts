enum Role { ADMIN, READ_ONLY, AUTHOR}

const person = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
    
    let favoriteActivities: string[];
    favoriteActivities = ['Sports', 'cooking'];
    
    let favouriteMusic: any[];
    favouriteMusic = ["Anyarray"]

    console.log(person.name);

    for (const hobby of person.hobbies) {
        console.log(hobby);
    }

if (person.role === Role.ADMIN) {
        console.log("success")
    }