import useClock from "../../hooks/useClock";

const LocalClock = () => {

    const {clock: local} = useClock()
    const {clock: est} = useClock("EST")
    const {clock: pst} = useClock("PST")
    const {clock: pakistan} = useClock("UTC", 5 * 60)
    const {clock: edt} = useClock("EDT", )
    const {clock: british} = useClock("BST", )
    const {clock: mst} = useClock("MST", )

    console.log("local UTC ",local.date)
    console.log("local est ",est.date)
    console.log("local pst ",pst.date)
    console.log("local pakistan ",pakistan.date)
    console.log("local pakistan ",edt.date)
    console.log("local pakistan ",mst.date)


    return (
        <div>
            <h1>
                this is local clock
            </h1>
        </div>
    )
}


export default LocalClock;