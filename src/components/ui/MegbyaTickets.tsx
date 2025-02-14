import Card from '@/_components/Cards/Card';

export default function MegbyaTickets() {
  const fastDescription = [
    'የፆም ፌስት የፋሲካ ኤክስፖ ልዩ እና አዲስ ክንዋኔ',
    'በኤክስፖ ታሪክ ለመጀመሪያ ጊዜ ሚከናወን',
    'የፆም ወቅትን በማስገባት ልዩ ዝግጅት',
  ];

  const festival = [
    'ልዩ ልዩ የዝግጅት ማድመቂያ ክንውኖች የሚካሄዱበት ሲሆን ለመጀመርያ ጊዜ በቴክኖሎጂ በመታገዝ የክብር እንግዶቻችን የጉብኝት መርሀ ግብር ይኖራቸዋል፡፡',
  ];

  const kidzopia = ['Kidzopia Content'];

  return (
    <section className="px-3 md:px-14 main_card_wrapper flex flex-col gap-4 -mt-20">
      <p className="font-bold text-xl">አዲስ ነገር ኤግዚቢሽን መግቢያ ትኬቶች</p>
      <article className="card_wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        <Card
          imageSrc="/adaddis_negeroch/gebeta_pic.svg"
          imageAlt="የፆም ፌስት"
          title="የፆም ፌስት"
          price="."
          description={fastDescription}
          descriptionTitle="የመግቢያ ትኬት + ምግብ + መጠጥ= የፆም ፌስት"
          buttonText="ትኬትዎን ይቁረጡ"
        />
        <Card
          imageSrc="/adaddis_negeroch/kidztopia.jpg"
          imageAlt="ልጆጲያ (ኪድዞጵያ)"
          title="ልጆጲያ (ኪድዞጵያ)"
          price="."
          description={kidzopia}
          descriptionTitle=""
          buttonText="ትኬትዎን ይቁረጡ"
        />
        <Card
          imageSrc="/adaddis_negeroch/gebeta_pic.svg"
          imageAlt="የፆም ፌስት"
          title="የፆም ፌስት"
          price="."
          description={festival}
          descriptionTitle="የመክፈቻ ስነ-ስርዓት"
          buttonText="ትኬትዎን ይቁረጡ"
        />
      </article>
    </section>
  );
}
