
interface Card{
    card_id:string,
    card_title:string,
    card_imgurl:string,
    card_content:string,
    card_gitHub:string,
    card_home:string,
    card_type:string,
    card_love:string|null,
    createdAt:Date,
    updatedAt:Date,
    deletedAt:Date|null
}

interface card_data extends Card {
    data:Card
}


export default card_data

