// this will  be my animation file using framer motion

export const containerVariant = (delay = 1) => ({
    offscreen:{
        opacity: 0,
        y: 50,
    },
    onscreen : {
        opacity: 4,
        y: 0,
        transition: {
            delay: delay,
            duration: 4.5,
            type: "spring",
        }
    }
})