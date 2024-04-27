import { useEffect, useState } from "react";

import * as S from "./style";

const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "16px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
    padding: "60px 16px",
};

const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "16px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
    padding: "60px 16px",
};

const sliderStyles = {
    position: "relative",
    height: "100%",
};

const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
};

const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
};

const activeDotStyle = {
    ...dotStyle,
    color: "#2314b0",
};

const modalImage = {
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.5)",
    zIndex: 99,
};

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isShowImage, setIsShowImage] = useState(false);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    const openModal = () => {
        setIsShowImage(true);
    };

    const closeModal = () => {
        setIsShowImage(false);
    };

    const handleKeyDown = (event) => {
        if (event.keyCode === 37) {
            // key left
            goToPrevious();
        } else if (event.keyCode === 39) {
            // key right
            goToNext();
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [currentIndex]);

    return (
        <div style={sliderStyles}>
            <div>
                <div onClick={goToPrevious} style={leftArrowStyles}>
                    ❰
                </div>
                <div onClick={goToNext} style={rightArrowStyles}>
                    ❱
                </div>
            </div>
            <S.ContainerImage
                src={slides[currentIndex].filename}
                onClick={openModal}
            ></S.ContainerImage>
            <div style={dotsContainerStyles}>
                {slides.map((slide, slideIndex) => (
                    <div
                        style={
                            slideIndex === currentIndex
                                ? activeDotStyle
                                : dotStyle
                        }
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                    >
                        ●
                    </div>
                ))}
            </div>
            {/* Modal */}
            {isShowImage && (
                <div style={modalImage} onClick={closeModal}>
                    <S.ModalImage
                        src={slides[currentIndex].filename}
                    ></S.ModalImage>
                </div>
            )}
        </div>
    );
};

export default ImageSlider;
