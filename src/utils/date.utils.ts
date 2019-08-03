export const formatDate = (date: string): string => {
    if (date) {
        return new Date(date).toLocaleDateString('en-US');
    }

    return 'Wrong date';
}