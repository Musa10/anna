import SectionHeader from "../../components/SectionHeader/SectionHeader";
import ImgCard from "../../components/ImgCard/ImgCard";

export default function LearnFeatures() {
  let cardData=[]
  return (
    <section>
        <SectionHeader headerText="What Students Learn" badgeText="Our Features" descriptionText="At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include"/>
        <div>
            {cardData.map((card,index)=>
                <ImgCard />
            )}
        </div>
    </section>
  )
}
