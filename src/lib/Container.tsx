import { ReactNode } from 'react';
import { cn } from './utils';
type Tcontainer = {
    children?:ReactNode
    className?:string
}
const Container = ({children,className}:Tcontainer) => {
    return <div className={cn('w-full max-w-[1230px] mx-auto px-[20px]',className)}>{children}</div>
};

export default Container;