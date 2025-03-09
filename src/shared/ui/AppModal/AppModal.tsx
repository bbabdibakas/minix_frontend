import {ReactNode} from 'react';
import {AppPortal} from 'shared/ui/AppPortal/AppPortal';
import {AppButton} from 'shared/ui/AppButton/AppButton';
import {classNames} from "shared/lib/classNames/classNames";
import * as styles from './AppModal.module.scss';

interface AppModalProps {
    className?: string;
    children?: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

export const AppModal = (props: AppModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;

    const onCloseHandler = () => {
        onClose()
    }

    return (
        <AppPortal>
            <div className={classNames(styles.AppModal, {[styles.opened]: isOpen}, [className])}>
                <div className={styles.overlay}>
                    <div className={styles.content}>
                        <div className={styles.header}>
                            <AppButton
                                onClick={onCloseHandler}
                            >
                                Close
                            </AppButton>
                        </div>
                        <div className={styles.body}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </AppPortal>
    );
};