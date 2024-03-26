import { ReactNode} from 'react'

const Container = ({ width, children }: { children: ReactNode; width: string }) => {
    return (
        <div style={{
            width: '100%',
            maxWidth: `${width}px`,
            marginLeft: 'auto',
            marginRight: 'auto',
            height: '100%',
            position: 'relative',
        }}>
            { children }
        </div>
    )
}

export default Container;