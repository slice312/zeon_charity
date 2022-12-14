import React from 'react';
import './CarouselButtons.scss'

// interface IProps {
//     activeIndex: number
//     setActiveIndex: any
//     modalOpened: boolean
// }

export const PrevButton = ({setActiveIndex, activeIndex, modalOpened}) => {
    return (
        <button className={`carouselButton prev ${modalOpened ? 'modalOpened' : ''}`}
                onClick={() => setActiveIndex(activeIndex-1)}>
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.59873 8L9.29937 14.7006L8 16L0 8L8 0L9.29937 1.29936L2.59873 8Z" fill="white"/>
            </svg>
        </button>
    );
};

export const NextButton = ({setActiveIndex, activeIndex, modalOpened}) => {
    return (
        <button className={`carouselButton next ${modalOpened ? 'modalOpened' : ''}`}
                onClick={() => setActiveIndex(activeIndex+1)}>
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.40127 8L0.700635 14.7006L2 16L10 8L2 0L0.700635 1.29936L7.40127 8Z" fill="white"/>
            </svg>
        </button>
    );
};

export const OpenModalButton = ({openModal}) => {
    return (
        <button className={'carouselButton openModal'} onClick={openModal}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.25708 8L14.2222 12.9651V9.77778H16V16H9.77778V14.2222H12.9651L8 9.25708L3.03486 14.2222H6.22222V16H0V9.77778H1.77778V12.9651L6.74292 8L1.77778 3.03486V6.22222H0V0H6.22222V1.77778H3.03486L8 6.74292L12.9651 1.77778H9.77778V0H16V6.22222H14.2222V3.03486L9.25708 8Z" fill="#706D7A"/>
            </svg>
        </button>
    );
};

export const CloseModalButton = ({closeModal}) => {
    return (
        <button className={'carouselButton closeModal'} onClick={closeModal}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.23814 7.00015L13.7435 1.49459C14.0855 1.15283 14.0855 0.598303 13.7435 0.256541C13.4014 -0.0855136 12.8475 -0.0855136 12.5055 0.256541L7.00015 5.7621L1.49453 0.256541C1.15249 -0.0855136 0.59857 -0.0855136 0.25653 0.256541C-0.08551 0.598303 -0.08551 1.15283 0.25653 1.49459L5.76215 7.00015L0.25653 12.5057C-0.08551 12.8475 -0.08551 13.402 0.25653 13.7438C0.42755 13.9145 0.651685 14 0.875529 14C1.09937 14 1.32351 13.9145 1.49453 13.7435L7.00015 8.2379L12.5055 13.7435C12.6765 13.9145 12.9006 14 13.1245 14C13.3483 14 13.5724 13.9145 13.7435 13.7435C14.0855 13.4017 14.0855 12.8472 13.7435 12.5054L8.23814 7.00015Z" fill="white"/>
            </svg>
        </button>
    )
}
