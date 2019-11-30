import { DataSource } from "apollo-datasource";

export class MockDataSource extends DataSource {
    getPosts() {
        return [
            {
                id: 1,
                content:
                    "Before the Act, incorporation was possible only by royal charter or private Act and was limited owing to Parliament's protection of the privileges and advantages thereby granted. As a result, many businesses came to be operated as unincorporated associations with possibly thousands of members. Any consequent litigation had to be carried out in the joint names of all the members and was almost impossibly cumbersome. Though Parliament would sometimes grant a private act to allow an individual to represent the whole in legal proceedings, this was a narrow and necessarily costly expedient, allowed only to established companies. "
            },
            {
                id: 2,
                content:
                    "The Xbox 360 features an online service, Xbox Live, which was expanded from its previous iteration on the original Xbox and received regular updates during the console's lifetime. Available in free and subscription-based varieties, Xbox Live allows users to: play games online; download games (through Xbox Live Arcade) and game demos; purchase and stream music, television programs, and films through the Xbox Music and Xbox Video portals; and access third-party content services through media streaming applications."
            },
            {
                id: 3,
                content:
                    "He had traveled in France, Britain, Bavaria, Saxony, Switzerland, and the Austrian county of Tyrol to study the armies and tactics of these countries and meticulously investigated the armaments and equipment of these foreign armies.[1] He demonstrated an early interest in military technology, and worked assiduously to improve the breechloading gun, for example. At his own house, he built a workshop to experiment with military technology."
            }
        ]
    }
}
