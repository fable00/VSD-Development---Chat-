import * as React from "react";
import "./styles.css";

export interface Option {
    label: React.ReactNode;
    src: string;
}

export interface ProfileImageProps {
    option: Option | string; 
    customStyle?: React.ReactNode;
    [key: string]: any; 
}

export const ProfileImage: React.FC<ProfileImageProps> = ({
    option,
    customStyle,
    ...rest
}) => {
    const isOption = typeof option !== 'string';
    const src = isOption ? (option as Option).src : rest.placeholder;
    const alt = isOption ? String((option as Option).label) : "Placeholder";

    return (
        <div {...rest}>
            {customStyle ? (
                <>{customStyle}</>
            ) : (
                    <img onClick={() => isOption && rest.onClick && rest.onClick(option as Option)} style={rest.style} className="profile-image" src={src} alt={alt} />
            )}
        </div>
    );
};