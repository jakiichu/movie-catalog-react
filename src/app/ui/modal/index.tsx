import {useEffect} from 'react';
import style from './index.module.scss';
import {cn} from "@/app/utils/cn.ts";
import type {IModalProps} from "./interface.ts";


const Modal = ({isOpen, onClose, title, children}: IModalProps) => {
    useEffect(() => {
        if (!isOpen) return;

        const onEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', onEsc);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', onEsc);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className={style.overlay} onMouseDown={onClose}>
            <div
                className={cn(style.modal)}
                onMouseDown={e => e.stopPropagation()}
            >
                {(title || !!onClose) && (
                    <header className={style.header}>
                        {title && <h3 className={style.title}>{title}</h3>}
                        <button
                            className={style.close}
                            onClick={onClose}
                            aria-label="Закрыть"
                        >
                            ✕
                        </button>
                    </header>
                )}

                <div className={style.content}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
