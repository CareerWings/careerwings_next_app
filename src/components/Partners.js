import * as React from 'react'
import Carousel from 'framer-motion-carousel'

const colors = ["black", "red", "blue"]

const Partner = () => (
    <Carousel>
        {colors.map((item, i) => (
            <div
                key={i}
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: colors[i],
                }}
            ></div>
        ))}
    </Carousel>
)
export default Partner;
