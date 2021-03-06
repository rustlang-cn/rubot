interface PointsLevel {
    level: number;
    points: number;
    icon: string;
    title: string;
}

interface MemoData {
    pointsLevel: PointsLevel[];
}

const memoData: MemoData = {
    pointsLevel: [
        {
            level: 1,
            points: 10,
            icon: "ð",
            title: "é¢å¤æåI",
        },
        {
            level: 2,
            points: 100,
            icon: "ðð",
            title: "é¢å¤æåII",
        },
        {
            level: 3,
            points: 200,
            icon: "ððð",
            title: "é¢å¤æåIII",
        },
        {
            level: 4,
            points: 400,
            icon: "ð",
            title: "æ­£å¼æåI",
        },
        {
            level: 5,
            points: 800,
            icon: "ðð",
            title: "æ­£å¼æåII",
        },
        {
            level: 6,
            points: 2000,
            icon: "ððð",
            title: "æ­£å¼æåIII",
        },
        {
            level: 7,
            points: 4000,
            icon: "ð®",
            title: "ççæåI",
        },
        {
            level: 8,
            points: 8000,
            icon: "ð®ð®",
            title: "ççæåII",
        },
        {
            level: 9,
            points: 16000,
            icon: "ð®ð®ð®",
            title: "ççæåIII",
        },
        {
            level: 10,
            points: 50000,
            icon: "ð",
            title: "æå¼ºçè",
        },
    ],
};

export function getLevel() {
    return memoData.pointsLevel;
}

async function fetchLevel() {
    const resp = await fetch(
        "https://raw.githubusercontent.com/rustlang-cn/Rustt/main/.github/points-level.json"
    );
    const table: PointsLevel[] = await resp.json();
    memoData.pointsLevel = table;
}

export async function startTask() {
    await fetchLevel();
    setInterval(async () => {
        await fetchLevel();
    }, 1000 * 60 * 60 * 3);
}
