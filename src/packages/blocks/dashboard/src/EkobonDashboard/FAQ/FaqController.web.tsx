import { BlockComponent } from "../../../../../framework/src/BlockComponent";
export const configJSON = require("../../config");
import axios from "axios";
import { message as MESSAGE } from "antd";

export interface Props {
    history: any;
}
interface S {
    isSideBarClick: any;
    isScroll: any;
    loginFlag: any;
    faqData: any;
    isDarkMode: any;
    onMenuOpen: any;
    onOpenIndividuals: any;
    onOpenCorporates: any;
    onOpenResources: any;
    onOpenResources1: any;
    full_name: any;
    contact_number: any;
    user_email: any;
    company: any;
    ekobon_help_you: any;
    message: any;
}
interface SS {
    id: any;
}
export default class FaqController extends BlockComponent<
    Props,
    S,
    SS
> {
    constructor(props: Props) {
        super(props);
        this.state = this.getEmptyState();
        this.onHandleSideBar = this.onHandleSideBar.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleSwithmode = this.handleSwithmode.bind(this);
        this.toTopFunction = this.toTopFunction.bind(this);
        this.onHandleOpenMenu = this.onHandleOpenMenu.bind(this);
        this.onHandleIndividualsOpen = this.onHandleIndividualsOpen.bind(this);
        this.onHandleCorporatesOpen = this.onHandleCorporatesOpen.bind(this);
        this.onClickResources = this.onClickResources.bind(this);
        this.onHandleGiftCard = this.onHandleGiftCard.bind(this);
        this.onHandlePlantTree = this.onHandlePlantTree.bind(this);
        this.onHandlePrivacyPolicy = this.onHandlePrivacyPolicy.bind(this);
        this.onHandleTermCondition = this.onHandleTermCondition.bind(this);
        this.onClickResources1 = this.onClickResources1.bind(this);
    }
    async componentDidMount() {
        super.componentDidMount();
        window.addEventListener('scroll', this.handleScroll);

        let loginDetails: any = localStorage.getItem("UserDetails");
        const loginFlags = JSON.parse(loginDetails)?.type;
        this.setState({
            loginFlag: loginFlags
        })
        const theme_data = localStorage.getItem("clim_theme");
        const data_val = theme_data ? JSON.parse(theme_data) : ''
        if (data_val != "") {
            console.log(data_val)
            if (data_val == "theme-light") {
                this.setState({
                    isDarkMode: false
                })
            }
            else {
                this.setState({
                    isDarkMode: true
                })
            }
        }
    }
    getEmptyState = () => ({
        loginFlag: "",
        onOpenResources1: false,
        isSideBarClick: false,
        isScroll: false,
        isDarkMode: false,
        onMenuOpen: false,
        onOpenIndividuals: false,
        onOpenCorporates: false,
        faqData: [{
            id: 1,
            body_data: "It is the total greenhouse gas (GHG) emissions caused by an individual, event, organization, service, place, or product, expressed as carbon dioxide equivalent (CO2e). Throughout a product’s lifetime, or lifecycle, different GHGs may be emitted, such as carbon dioxide (CO2), methane (CH4), and nitrous oxide (N2O), each with a greater or lesser ability to trap heat in the atmosphere. For humans and animals, existence also has a carbon footprint because they breathe out carbon dioxide. It varies from person to person based on their lifestyle and activities. The global average annual carbon footprint per person is 7 tonnes of CO2e.",
            body_heading: "What is carbon footprint?"
        },
        {
            id: 2,
            body_data: "The way life functions on earth involve humans and animals emitting carbon dioxide and trees absorbing it. This maintains the balance. However, the exorbitant increase in population and damaging human activities has made emission levels go higher than what trees can absorb.Carbon offsetting is the practical and effective way to balance out your carbon footprint and compensate for the emissions you produce.It is accomplished by investing in climate projects which aim at carbon reduction(eg replacing fossil fuel with renewable sources to generate energy) or carbon removal(eg planting trees that sequester carbon from the atmosphere and store it). If you wish to live carbon- neutral, you must offset as much carbon as you emit or more than that.",
            body_heading: "What does it mean to do carbon offsetting?"
        },
        {
            id: 3,
            body_data: "Both the terms tend to be used interchangeably as both represent one tonne of greenhouse gas emissions. For every unit of carbon that you remove or reduce, you are issued a verified certificate called a carbon credit. These credits can be bought and sold in a carbon marketplace. Independent certification bodies certify carbon credits and they are referred to as tradeable instruments.Each carbon credit corresponds to a tonne of carbon dioxide avoided.",
            body_heading: "Are carbon credits and carbon offsets the same thing?"
        },
        {
            id: 4,
            body_data: "Carbon retirement refers to de-registering carbon credits and taking them out of circulation. Once de-registered, no one can buy that particular carbon credit to meet their goal of carbon neutrality.Thus, we are motivated to invest more in climate projects and greener technologies. As strange as it may sound, carbon retirement contributes further to the goal of curbing global warming.",
            body_heading: "How do you retire carbon?"
        }, {
            id: 5,
            body_data: "Ekobon searches and partners with the best carbon offsetting projects globally. Projects selected are verified by leading carbon offset standards like Verra or Gold Standard and aimed at achieving Sustainable Development Goals (SDG) set by United Nations.Ekobon buys carbon credits on your behalf and deregisters them so that they are burnt permanently and can’t be used again. Tree planting projects however are not usually certified because of their non-standardized nature and don’t generate carbon credits.Ekobon is committed to finding and verifying the best and most transparent projects. This ensures that your contributions reap the desired results.",
            body_heading: "How does Ekobon offset my carbon footprint?"
        },
        {
            id: 6,
            body_data: "Carbon offsets fall majorly into two categories. These are carbon avoidance and carbon removal. Carbon avoidance refers to reducing emissions from current and planned operations. Removal on the other hand focuses on eliminating carbon from the atmosphere.Carbon avoidance projects often target replacing carbon-intensive processes. These include renewable energy projects like wind farms, biogas digesters, hydroelectric dams, biomass energy, etc. Carbon removal projects include nature-focused solutions like afforestation, mangrove restoration, etc. Here the new trees remove carbon from the atmosphere. Apart from these nature-focused solutions, carbon removal projects also include technological solutions like enhanced mineralization and direct air capture.",
            body_heading: "What are the types of carbon offsets?"
        },
        {
            id: 7,
            body_data: "The standards in carbon credit quality are set by carbon offset programs that are responsible for issuing, transferring, and retiring carbon credits. Platforms like Gold Standard, Verra, Clean Development Mechanism (CDM) require project developers to undergo a strict registration process that involves stringent auditing processes.",
            body_heading: "How are carbon offsets and credits audited?"
        },
        {
            id: 8,
            body_data: "The average per capita carbon footprint is 7 tonnes of CO2e per year. However, there are large inequalities in per capita emissions across the world. More populous countries with some of the highest per capita emissions – and therefore high total emissions – are the United States, Australia, and Canada. India while having a low per capita average of 2 tonnes is the third-largest emitter next only to China and US. Based on the data from sources including World Bank and the UN, countries can be grouped into three categories based on average annual carbon footprint:- HIGH emissions countries (21t C02/yr): Australia- MEDIUM emissions countries (16t C02/yr): USA, Canada- LOW emissions countries (12t C02/yr): New Zealand, UK, Other Europe, Asia, South America, Africa",
            body_heading: "What is the average carbon footprint, globally?"
        },
        {
            id: 9,
            body_data: "It doesn't really. The global annual average carbon footprint is 7 tonnes, which is close to what you will end up emitting if you are living in a city and travel 2-3 times a year, irrespective of the country's annual average. The cost to offset carbon footprint by buying carbon credits of credible climate projects range from 15-30 usd per tonne. Let's say you decide to offset half of your footprint and reduce the rest by making changes in your lifestyle, this will cost you roughly 100 usd every year. Does it really look high ? Consider it as the way to give back to nature and do your small bit to save the planet. ",
            body_heading: "Does it cost a lot to offset my annual footprint ?"
        },
        {
            id: 10,
            body_data: "Our intuitive carbon calculator is based on high-quality global research. It takes the annual average per capita footprint of your country and adjusts it based on the lifestyle parameters you input. The methodology to calculate carbon footprint based on your activity like air travel, car travel etc is explained in the corresponding section.",
            body_heading: "How does the carbon calculator work?"
        },
        {
            id: 11,
            body_data: "Yes, Ekobon caters to climate-conscious individuals and businesses globally. Irrespective of your location on the globe, you can choose to invest in climate projects that we research and partner with. This way, you can reduce your footprint and help reverse climate change.",
            body_heading: "Can I offset my carbon footprint if I live outside my country?"
        },
        {
            id: 12,
            body_data: "Trying to live minimally, being conscious of your actions, and following the principles of reduce, reuse and recycle is the first step to helping the earth. These efforts will have a long-term impact on the environment. Some of your carbon footprints are unavoidable and offsetting helps to neutralize that. Here are some ways in which you can reduce your footprint.FOR CORPORATESBe conscious about your footprint through travel and transport Introduce carpooling plans Choose your office location, keeping in mind the locations of prospective and existing employees. Also, try to find a location accessible by public transport Offer subscription plans to electric vehicles or introduce electric cars as office transport Install Solar panels to generate electricity Install Solar Heaters Spread awareness regarding climate change among your employees. Introduce team-building activities around the theme and organize activities like plantation drives or earth hour Reduce the carbon footprint of conferences and meetings Prefer virtual meetings and conferences over physical ones Motivate people to use buses and trains over flights Avoid chartered flights Find flights with the lowest CO2 emissions Ensure the hospitality and accommodation arrangements are made consciously. Avoid printouts, leaflets, bottles of mineral water, and excessive marketing material Motivate employees to work from home Save Energy Service appliances regularly Perform an energy consumption audit Set a renewable energy target and switch to renewable energy Notice energy labels–Invest in products with certified energy from the bureau of energy efficiency Give your office an energy upgrade and invest in energy-efficient fixtures and appliances Turn off the appliances when not in use Observe a complete shutdown of all appliances for an hour per month. You can increase this duration based on the nature of your business Reduce the carbon footprint of your workspace by making minor changes Avoid packaged food and drinks Try for in-house catering or choose vendors that use reusable containers Invest in compostable coffee pods or switch to pod-less coffee makers Opt for used furniture and appliances Avoid printing Use stationary judiciously Segregate office waste and focus on recycling and waste management initiatives Apply for green certification and work towards it Encourage eco-consciousness among others in office  FOR INDIVIDUALS  Choose responsible commute Chose public transport over private vehicles Fly less, opt for modes of transport that produce less carbon Switch to electric vehicles from fossil fuel powered vehicles Be conscious about your consumptionAvoid buying new. Reuse or buy preownedBuy furniture made of old wood or compressed woodAvoid fast fashionOpt for low carbon options if you must buy new You do not need to own all gadgets on the market. Avoid or opt for preloved devicesSwitch to environmentally-friendly hygiene productsSwitch to clean energyInvest in energy-efficient appliancesMinimize the consumption of non-vegetarian food, especially beefCompost your food wasteSegregate and recycle other waste that you produceResearch low carbon diet optionsSwitch off the appliances when not in useDo not waste waterMinimize plastic use and stay away from single-use plastic Spread awareness regarding environmentally friendly ways of living",
            body_heading: "How can I reduce my carbon footprint, rather than offset it?"
        },
        {
            id: 13,
            body_data: "Yes, we offer a wide selection of carbon projects. The default option is a basket of projects which invests evenly across all types of climate projects. However, before the payment is made you are directed to the climate projects page where you can select the project based on the causes you are more passionate about.",
            body_heading: "Can I decide which project to support?"
        },
        {
            id: 14,
            body_data: "Do not worry, we are as passionate about the cause as you are. We share regular project updates and real site pictures with people who invest in the projects.",
            body_heading: "How can I be sure that the money I contribute will be used to offset greenhouse gas emissions?"
        },
        {
            id: 15,
            body_data: "Every month end we publish the receipts of carbon credits we bought in that month so that you can see how many tonnes of CO2 have been offset. Please see these here",
            body_heading: "Is there a receipt for the offsets we buy?"
        },
        {
            id: 16,
            body_data: "In the beginning, 75% of your contribution will be spent on climate compensation through our offset partners. 25% margin will be used towards Ekobon expenses. We will also ensure that more online stores offer climate compensation.",
            body_heading: "Will my entire contribution go to climate compensation?"
        },
        {
            id: 17,
            body_data: "The world can be a better place only if all individuals and businesses consciously resolve to bring about a change. Climate action is a choice that individuals and businesses are making on their own. While there will always be outliers who use offsetting as an excuse to pollute, we believe that many more are reducing first and offsetting the unavoidable. Also, offsetting involves expenditure and thus companies that spend towards compensation are more mindful of their emissions.",
            body_heading: "Isn’t carbon offsetting just an excuse for people to continue a high carbon lifestyle?"
        },
        {
            id: 18,
            body_data: "As a responsible company, you must adopt low-carbon processes in your operations. The goal must be to reduce emissions as far as possible. You must then offset the emissions you cannot avoid. Offsetting carbon can quickly speed up the process of global decarbonization. This is done by funding important and visionary projects that target carbon reduction and offer other benefits that would have otherwise been impossible due to the lack of resources.Carbon offsets incentivize governments, communities, and other organizations to reduce greenhouse gas emissions. Historically, carbon offsets have sometimes failed to live up to the promises and the trust individuals and organizations place in them. This has led them to be accused of greenwashing and hampering climate action.Companies must be conscious and responsible with carbon offsetting. They must come up with robust reduction plans, and diligently track their emissions within and outside the value chain. Offsetting as a strategy should be used only for emissions that are tough to reduce. All responsible organizations must design their long-term decarbonization strategy in a way that eventually there are negligible emissions.",
            body_heading: "How should carbon offsets fit into your decarbonization strategy?"
        },
        {
            id: 19,
            body_data: "You can change or pause your subscription anytime by visiting projects section in your dashboard, wherein you can see the list of all the projects you have invested in and your susbcriptions till date. When you renew the project, you will be asked to choose the climate project again from the prevailing list. Offset amount will get adjusted based on the carbon credit cost of the project that time and total offset amount on the dashboard will get updatd to include this event. ",
            body_heading: "How do I change/cancel my subscription?"
        },
        {
            id: 20,
            body_data: "Your dashboard is your single destination for all information related to carbon offsetting. It will offer information regarding the volume of carbon you’ve offset and the updates from projects you have invested in.",
            body_heading: "Where can I see my impact?"
        },
        {
            id: 21,
            body_data: "Welcome to Ekobon! In the first month of your membership, you will receive email with the summary of climate projects you have invested in, details of how carbon offsetting works and tips to reduce your carbon footprint. Thank you for considering climate action.",
            body_heading: "I’m a new member—what should I expect in my first month?"
        },
        {
            id: 22,
            body_data: "Once the trees have been planted, you will get regular project updates and images from the plantation site for certain period of time.",
            body_heading: "What happens after the trees have been planted?"
        },
        {
            id: 23,
            body_data: "Trees are planted monthly and your contribution will fund the process in the next cycle after the contribution.",
            body_heading: "How soon after my purchase are the trees planted and conserved?"
        },],
        onOpenResources: false,
        full_name: "",
        contact_number: "",
        user_email: "",
        company: "",
        ekobon_help_you: "",
        message: "",
    });
    toTopFunction() {
        window.scrollTo(0, 0)
    }

    onHandleSubmitRequestApi(e: any) {
        e.preventDefault();
        if (this.state.full_name && this.state.contact_number && this.state.user_email && this.state.company && this.state.ekobon_help_you && this.state.full_name && this.state.message) {
            const data = {
                fullName: this.state.full_name,
                phone_number: this.state.contact_number,
                email: this.state.user_email,
                message: this.state.message,
                helpyou: this.state.ekobon_help_you,
                company: this.state.company
            }
            axios({
                method: configJSON.apiPostMethod,
                url: configJSON.baseUrl1 + configJSON.contactUs2EndPointURL,
                data: data,
                headers: { "Content-Type": configJSON.dashboarContentType },
            })
                .then((res) => {
                    console.log({ res })
                    this.setState({
                        full_name: "",
                        contact_number: "",
                        user_email: "",
                        company: "",
                        ekobon_help_you: "",
                        message: "",
                    })
                    if (res?.data?.success == true) {
                        MESSAGE.success(res?.data?.message, 2);
                    } else {
                        MESSAGE.error(res?.data?.message, 2);
                    }
                })
                .catch((err) => {
                    console.log({ err })
                })
        } else {
            MESSAGE.error("All fields are maindetory!", 2);
        }
    }
    handleScroll() {
        if (window.scrollY > 100) {
            this.setState({
                isScroll: true
            });
        } else {
            this.setState({
                isScroll: false
            });
        }
    };

    handleSwithmode() {
        if (this.state.isDarkMode == true) {
            this.setState({
                isDarkMode: false,
            });
            localStorage.setItem("clim_theme", JSON.stringify("theme-light"))
        }
        else {
            this.setState({
                isDarkMode: true,
            });
            localStorage.setItem("clim_theme", JSON.stringify("theme-dark"))
        }
    }

    onClickResources1() {
        if (this.state.onOpenResources1 == true) {
            this.setState({
                onOpenResources1: false
            })
        }
        else {
            this.setState({
                onOpenResources1: true
            })
        }
    }

    onHandleSideBar() {
        if (this.state.isSideBarClick == true) {
            this.setState({
                isSideBarClick: false
            })
        } else {
            this.setState({
                isSideBarClick: true
            })
        }
    }

    onHandleIndividualsOpen() {
        if (this.state.onOpenIndividuals == true) {
            this.setState({
                onOpenIndividuals: false
            })
        } else {
            this.setState({
                onOpenIndividuals: true
            })
        }
    }

    onHandleCorporatesOpen() {
        if (this.state.onOpenCorporates == true) {
            this.setState({
                onOpenCorporates: false
            })
        } else {
            this.setState({
                onOpenCorporates: true
            })
        }
    }

    onClickResources() {
        if (this.state.onOpenResources == true) {
            this.setState({
                onOpenResources: false
            })
        }
        else {
            this.setState({
                onOpenResources: true
            })
        }
    }

    onHandleOpenMenu() {
        if (this.state.onMenuOpen == true) {
            this.setState({
                onMenuOpen: false
            })
        }
        else {
            this.setState({
                onMenuOpen: true
            })
        }
    }

    onHandleGiftCard() {
        localStorage.setItem("redirect_url", ("gift_card"))
        if (this.state.loginFlag) {
            this?.props?.history.push("/individual/giftCard")
        }
        else {
            this?.props?.history.push({
                pathname: "/login",
                state: "Individual"
            })
        }
    }

    onHandlePlantTree() {
        localStorage.setItem("redirect_url", ("plant_tree"))
        if (this.state.loginFlag) {
            this?.props?.history.push("/individual/offset-onetime")
        }
        else {
            this?.props?.history.push({
                pathname: "/login",
                state: "Individual"
            })
        }
    }

    onHandlePrivacyPolicy() {
        this?.props?.history.push("/individual/privacy-policy")
    }
    onHandleTermCondition() {
        this?.props?.history.push("/individual/terms-conditions")
    }

}


