
type PresentationProps = {
    imgUrl: string;
    name: string;
    profession: string;
}

export function Presentation({ imgUrl, name, profession }: PresentationProps) {
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-3xl font-bold">{name}</h1>
            <img className="rounded-full w-60" src={imgUrl} />
            <p className="text-neutral-600">{profession}</p>
        </div>
    );
}