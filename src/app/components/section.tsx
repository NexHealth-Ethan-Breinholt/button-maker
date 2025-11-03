interface SectionProps {
    children: React.ReactNode,
}

export default function Section(props: SectionProps) {
    return (
        <div className="border-zinc-600 border-2 p-4 rounded-lg flex flex-col gap-4">
            {props.children}
        </div>
    )
}