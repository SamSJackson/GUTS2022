import { GetStaticProps } from "next";
import Header from "../../components/header";

import styles from "/styles/mastermind.module.css";

type Props = {
};

const mastermindPage : React.FC<Props> = () => {

    return (
    <div>
        <Header />
        <div className={styles.mastermind}>
            <pre>
                <p>Abdul Murphy: In Boyd Orr after closing time</p>
                <p>Oscar Brown: In 2 places at once 3 times</p>
                <p>Alice Patterson: In 2 places at once 1 time, didn't go to morning lecture</p>
                <p>Paul Butler: In 2 places at once 1 time</p>
                <p>Jonny Craig: Statement and timetable don't match</p>

                <p>This narrows it down to 5 possible masterminds:
                    <ul>
                        <li>Marilyn White</li>
                        <li>Rosemary Jones</li>
                        <li>Scott Johnston</li>   
                        <li>Charlotte Matthews</li>
                        <li>Heather Yates</li>
                    </ul>
                </p>

                ---

                <p>Side note: due to irregular data 2 people were wrongly assumed originally to be perpetrators:</p>

                <p>Scott Johnston had noted that he was in Kelvingrove park for 23 hours, this has since been updated clearing his name (as a perpetrator, not as a mastermind though)</p>

                <p>Eric Parkin claims to be in society he isn't in and didn't go to his lecture, however his timetable matches two possible masterminds (Scott Johnston and Heather Yates) therefore he cannot be a perpetrator and we have to assume this too is incorrect data</p>

                ---

                <p>All other timetables match so it has to be one of the people who made a statement, so by inputting each statement person into my mastermind finder these are the results</p>

                <p>Name:Matching Timetable
                    <ol>
                        <li>Amy Powell:None</li>
                        <li>Danny Thomas:None</li>
                        <li>Stuart Wands:Scott Johnston</li>
                        <li>Chloe Tyler:Scott Johnston,Heather Yates</li>
                        <li>Marc Harrison:Scott Johnston,Heather Yates</li>
                        <li>Gerald Jones:Heather Yates</li>
                        <li>Lee James:None</li>
                        <li>Danielle Cox:None</li>
                        <li>Oscar Brown:None</li>
                        <li>Katie Bell:Scott Johnston,Heather Yates</li>
                        <li>Barry Robinson:Heather Yates</li>
                        <li>Alice Patterson:N/A</li>
                        <li>Beth Jones:None</li>
                        <li>Eric Parkin:Scott Johnston,Heather Yates</li>
                        <li>Angela Jones:None</li>
                        <li>Russell Dixon:None</li>
                        <li>Martin Smith:None</li>
                        <li>Pamela Jones:None</li>
                        <li>Jonny Craig:N/A</li>
                        <li>Melanie Patterson:Scott Johnston</li>
                        <li>Carolyn Bond:None</li>
                        <li>Abdul Murphy:N/A</li>
                        <li>Russell Matthews:None</li>
                        <li>Jill Hill:Scott Johnston,Heather Yates</li>
                        <li>Shaun Yates:Scott Johnston</li>
                    </ol>
                </p>

                <p>
                It cannot be anyone who had multiple results as that would leave it impossible to catch the mastermind with the data we have so this narrows perp 6 to 5 people:
                    <ul>
                        <li>Stuart Wands</li>
                        <li>Gerald Jones</li>
                        <li> Barry Robinson</li>
                        <li>Melanie Patterson</li>
                        <li>Shaun Yates</li>
                    </ul>
                </p>

                ---

                <p>Gerald Jones and Barry Robinson have statements that clear them so that leaves 3 people all who correlate to Scott Johnston so he is the confirmed mastermind</p>

                ---

                Stuart Wands' statement claims that he got a Tesco meal deal with only ham which is impossible

                ---

                Melanie Patterson has many pauses in her day, which may be he trying to come up with convincing lies, or may be her being tired from being out the previous day

                ---

                Shaun Yates went out into Kelvingrove park for four hours to "sike himself up for minecraft"

                ---

                This leads me to the conclusion that 5 confirmed perpetrators are: 
                Abdul Murphy
                Oscar Brown
                Alice Patterson
                Paul Butler
                Jonny Craig

                With 3 possibles:
                Stuart Wands
                Melanie Patterson
                Shaun Yates

                Which leads to the fact that the mastermind has to be:
                Scott Johnston
            </pre>
        </div>
    </div>
    )
}

export let getStaticProps: GetStaticProps<Props> = async (context) => {
    return {
      props: {
      },
    };
  };

  export default mastermindPage;