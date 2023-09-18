
export async function generateMetadata() {
    return {
        title: 'Starts',
    }
}

const layout = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default layout;