interface TestingProps {
    name: string;
}

const Testing = ({ name }: TestingProps) => {
    return (
        <div>
            <h4>Testing {name}</h4>
        </div>
    )
}

export default Testing;