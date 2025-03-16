export interface StarProps {
    top: number;
    left: number;
    size: number;
    duration: number;
}

export default function generateStars(): StarProps[] {
    const numStars = 100;
    const starArray: StarProps[] = [];
    for (let i = 0; i < numStars; i++) {
        const top = Math.random() * window.innerHeight;
        const left = Math.random() * window.innerWidth;
        const size = Math.random() * 3 + 0.5; // Sizes between 0.5px and 3.5px
        const duration = Math.random() * 3 + 2; // Animation duration between 2s and 5s
        starArray.push({ top, left, size, duration });
    }
    return starArray;
}