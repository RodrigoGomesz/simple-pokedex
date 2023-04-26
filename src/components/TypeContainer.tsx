type Props = {
    type?: string
}

type Colors = {
    bg: string;
    txt: string;
};

function TypeContainer({ type }: Props) {
    let colors: Colors = getColors(type);

    return (
        <div className=' rounded-md border-[1px] border-black '>
            <div className={` ${colors.bg} ${colors.txt} flex justify-center items-center font-mono  text-sm text-center rounded-md w-24 border-2 border-white `}>
                { type }
            </div>
        </div>
    )
}

function getColors(type?: string): Colors {
    let colors: Colors = {
        bg: 'bg-black',
        txt: 'text-white'
    };

    switch (type?.toLowerCase()) {
        case 'normal':
            colors.bg = 'bg-neutral-400';
            colors.txt = 'text-white';
            return colors;
        case 'fighting':
            colors.bg = 'bg-amber-800';
            colors.txt = 'text-white';
            return colors;
        case 'flying': 
            colors.bg = 'bg-violet-300';
            colors.txt = 'text-black';
            return colors;
        case 'poison':
            colors.bg = 'bg-fuchsia-600';
            colors.txt = 'text-white';
            return colors;
        case 'ground':
            colors.bg = 'bg-orange-300';
            colors.txt = 'text-white';
            return colors;
        case 'rock':
            colors.bg =  'bg-amber-500';
            colors.txt = 'text-white';
            return colors;
        case 'bug':
            colors.bg =  'bg-lime-600';
            colors.txt = 'text-white';
            return colors;
        case 'ghost':
            colors.bg =  'bg-violet-900';
            colors.txt = 'text-white';
            return colors;
        case 'steel':
            colors.bg =  'bg-slate-300';
            colors.txt = 'text-black';
            return colors;
        case 'fire':
            colors.bg =  'bg-orange-500';
            colors.txt = 'text-white';
            return colors;
        case 'water':    
            colors.bg =  'bg-blue-400';
            colors.txt = 'text-white';
            return colors;
        case 'grass':
            colors.bg =  'bg-green-500';
            colors.txt = 'text-black';
            return colors;
        case 'electric':
            colors.bg =  'bg-yellow-300';
            colors.txt = 'text-black';
            return colors;
        case 'psychic':
            colors.bg =  'bg-fuchsia-400';
            colors.txt = 'text-white';
            return colors;
        case 'ice':
            colors.bg =  'bg-cyan-200';
            colors.txt = 'text-black';
            return colors;
        case 'dragon':
            colors.bg =  'bg-purple-700';
            colors.txt = 'text-white';
            return colors;
        case 'dark':
            colors.bg =  'bg-orange-950';
            colors.txt = 'text-white';
            return colors;
        case 'fairy':
            colors.bg =  'bg-pink-300';
            colors.txt = 'text-white';
            return colors;
    }
    
    return colors;
}

export default TypeContainer;