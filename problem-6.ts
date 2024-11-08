interface Profile {
    name: string;
    age: number;
    email: string;
}

const updateProfile=(profile: Profile, updatedValue: Partial<Profile>): Profile=> {
    return { ...profile, ...updatedValue };
}
