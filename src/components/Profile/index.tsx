import * as React from "react"
import "./styles.css"

export interface Option {
    label: React.ReactNode,
    src: string,
    style?: React.CSSProperties
}

export interface ProfileImageProps{
    options : (Option | string)[]
    style?: React.CSSProperties
    customStyle?: React.ReactNode
    onChange?: (arg: Option) => void
    onClick?: (option: Option) => void
    placeholder?: string
}

export const ProfileImage: React.FC<ProfileImageProps> = ({options, style, customStyle ,onClick, placeholder})=> {
    return (
        <div >
            {customStyle ? (
                <>{customStyle}</>
            ) : (
                <div>
                    {options.length > 0 ? (
                        options.map((option, index) =>{
                            const isOption = typeof option != 'string'
                            return (
                                <div
                                    key={index}
                                    onClick={()=> isOption && onClick && onClick(option as Option)}
                                    style={isOption ? (option as Option).style : {}}
                                >
                                    <img style={style} className = "profile-image" src={isOption ? (option as Option).src : placeholder} alt={isOption ? String((option as Option).label) : "Placeholder"}
                                    />
                                </div>
                            )
                        })
                    ) : (
                        <img src={placeholder} alt="Placeholder" />
                    )}
                </div>
        )}
    </div>
)}


