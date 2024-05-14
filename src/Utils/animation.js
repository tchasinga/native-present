// this will  be my animation file using framer motion

export const containerVariant = (delay = 3) => ({
    offscreen:{
        opacity: 0,
        y: 50,
    },
    onscreen : {
        opacity: 4,
        y: 0,
        transition: {
            delay: delay,
            duration: 5.5,
            type: "spring",
        }
    }
})