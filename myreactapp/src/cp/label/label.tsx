import React from 'react';
import { styles as sy} from './label.style';
import { FontAttr, LabelProps } from './label.type';

const defaultFont:FontAttr = {size:'1em',color:'inherit',family:'monospace',opaque:false};

const Label: React.FC<LabelProps> = ({children,fontfamily='monospace',fontsize='1em',fontcolor='inherit',opaque=false} ) => {

    const font:FontAttr = {size:fontsize,color:fontcolor,family:fontfamily,opaque:opaque};

    return (
        <div>
            <sy.container $font={font}>
                {children}
            </sy.container>
        </div>
    )
}


export {Label,defaultFont}