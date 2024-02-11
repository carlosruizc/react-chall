import React, { useState } from "react"
import BreakifiedStrings from "./components/BreakifiedStrings"
import { InputField, Button } from "../../components"
import styles from "./Breakify.module.css"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { breakifyStrings } from "../../app/actions/breakifyStrings"
import { RootState } from "../../app/store"

function Breakify() {
    const [inputs, setInputs] = useState(["Breaking", "Bad"])

    const dispatch = useAppDispatch()

    const breakifiedStrings = useAppSelector((state: RootState) => state?.breakifyString).identifiedElement.length === 0 && useAppSelector((state: RootState) => state?.breakifyString).substringsArray[0].length === 0 ? {
        "identifiedElement": [
            [
                "Br"
            ],
            [
                "Ba"
            ]
        ],
        "substringsArray": [
            [
                [
                    "Br",
                    "eaking"
                ],
                [
                    "Breaking"
                ]
            ],
            [
                [
                    "Ba",
                    "d"
                ],
                [
                    "Bad"
                ]
            ]
        ]
    } : useAppSelector((state: RootState) => state?.breakifyString)

    const handleBreakify = () => {
        dispatch(breakifyStrings(inputs));
    };

    const handleInputChange = (index: number, value: string) => {
        setInputs(prevInputs => [
            ...prevInputs.slice(0, index),
            value,
            ...prevInputs.slice(index + 1),
        ])
    }

    return (
        <>
            <section className={styles.breakify}>
                <BreakifiedStrings
                    array={breakifiedStrings.substringsArray[0][0]}
                    symbol={String(breakifiedStrings.identifiedElement[0])}
                />
                <BreakifiedStrings
                    array={breakifiedStrings.substringsArray[1][0]}
                    symbol={String(breakifiedStrings.identifiedElement[1])}
                />
            </section>
            <section className={styles.inputFieldsContainer}>
                <InputField
                    label="First Name"
                    className={styles.inputField}
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    value={inputs[0]}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleInputChange(0, e.target.value)
                    }
                ></InputField>
                <InputField
                    label="Last Name"
                    className={styles.inputField}
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={inputs[1]}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleInputChange(1, e.target.value)
                    }
                ></InputField>
            </section>
            <Button className={styles.breakifyButton} onClick={handleBreakify}>
                Breakify
            </Button>

        </>
    )
}

export default Breakify
