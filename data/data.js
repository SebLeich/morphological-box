/**
 * the list contians all evaluation approaches
 */
var approaches = [
    new Approach({
        id: 1,
        name: "Method Evaluation Model",
        short: "MEM",
        attributes: [1, 2, 74],
        sources: [
            "https://link.springer.com/article/10.1007/s13173-010-0003-5"
        ],
        authors: [
            "Moody", "Shanks"
        ],
        procedure: [

        ]
    }),
    new Approach({
        id: 2,
        name: "semiotic model quality framework",
        short: "SEQUAL",
        attributes: [66, 4, 16, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 50, 51, 60, 61, 63, 67, 68, 74],
        sources: [
            "Quality in Business Process Modeling (Krogstie, 2016)"
        ],
        authors: [

        ]
    }),
    new Approach({
        id: 3,
        name: "Bunge-Wand-Weber ontology",
        short: "BWW",
        attributes: [1, 4, 63, 74, 76, 77, 78, 79, 80, 81, 82, 83],
        sources: [
            "https://link.springer.com/article/10.1007/s13173-010-0003-5",
            "Ontologische Evaluierung von Referenzmodellen auf Basis des Bunge-Wand-Weber-Modells (Fettke & Loos, 2003)"
        ],
        authors: [

        ],
        procedure: [
            new Step({
                sequNr: 1,
                title: "construction of the transformation rules",
                desc: "Because their is no standardized language for modeling reference models, it is important to normalize them for comparison. The transformation rules for normalization depict the elements of the ontology on the elements of the modeling language (representation mapping). The mapping of modeling language elements on the ontology elements is called interpretation mapping. Their are 4 kinds of deficits: incompleteness (less elements in modeling language as in the ontology), redundancy (an element of the ontology has more representations in the modeling language), overpowering (more elements in the modeling language than in the ontology) & overload (an element of the modeling language has more mappings to the ontology)"
            }),
            new Step({
                sequNr: 2,
                title: "identification of the modelling deficits",
                desc: ""
            }),
            new Step({
                sequNr: 3,
                title: "transformation of the reference model",
                desc: ""
            }),
            new Step({
                sequNr: 4,
                title: "evaluation of the results",
                desc: ""
            })
        ]
    }),
    new Approach({
        id: 4,
        name: "For Enterprise Modeling",
        short: "4EM",
        attributes: [10, 11, 12],
        sources: [

        ]
    }),
    new Approach({
        id: 5,
        name: "MAPQUAL",
        short: null,
        attributes: [13, 14, 16, 63, 64, 74],
        authors: [
            "Nossum", "Krogstie"
        ],
        sources: [
            "http://docs.alexanno.net/files/MapQual_DIGITAL.pdf"
        ]
    }),
    new Approach({
        id: 6,
        name: "SEQUAL-EM",
        short: null,
        attributes: [11, 16, 74],
        sources: [
            "Quality in Business Process Modeling (Krogstie, 2016)"
        ]
    }),
    new Approach({
        id: 7,
        name: "GOMS",
        short: null,
        attributes: [15, 64, 74, 75],
        sources: [
            
        ]
    }),

    new Approach({
        id: 8,
        name: "quality of modeling",
        short: "QoMo",
        attributes: [3, 4, 35, 52],
        sources: [
            
        ]
    }),
    new Approach({
        id: 9,
        name: "ISO-9000 quality standard",
        short: "QMS",
        note: [
            "key characteristics in ISO/IEC 9126"
        ],
        attributes: [3, 17, 18, 19, 20, 21, 22, 63, 64, 74, 75],
        sources: [
            "Quality in Business Process Modeling (Krogstie, 2016)"
        ]
    }),
    new Approach({
        id: 10,
        name: "Iivari’s framework",
        short: null,
        attributes: [3],
        sources: [
            
        ]
    }),
    new Approach({
        id: 11,
        name: "Zachman framework",
        short: null,
        attributes: [11],
        sources: [
            
        ]
    }),
    new Approach({
        id: 12,
        name: "SEQUAL-BPM",
        short: null,
        attributes: [11, 74],
        sources: [
            62
        ]
    }),
    new Approach({
        id: 13,
        name: "Grundsätze ordnungsmäßiger Modellierung II",
        short: "GOM II",
        attributes: [10, 65, 74, 76],
        sources: [
            
        ]
    }),
    new Approach({
        id: 14,
        name: "Lindland, Sindre, and Sølvberg framework",
        short: "LSS",
        attributes: [],
        sources: [
            "https://link-springer-com.wwwdb.dbod.de/content/pdf/10.1007%2Fs11219-011-9136-9.pdf"
        ]
    }),
    new Approach({
        id: 15,
        name: "conceptual modeling quality framework",
        short: "CMQF",
        attributes: [35, 36],
        sources: [
            "https://link-springer-com.wwwdb.dbod.de/content/pdf/10.1007%2Fs11219-011-9136-9.pdf"
        ]
    }),
    new Approach({
        id: 16,
        name: "quality of enterprise models",
        short: "QEM",
        attributes: [10, 38, 39, 40, 41, 42, 43, 44],
        sources: [
            "Quality in Business Process Modeling (Krogstie, 2016), p. 63 f"
        ],
        authors: [
            "Larsson", "Segerberg"
        ]
    }),
    new Approach({
        id: 17,
        name: "guidelines to achieve enterprise modeling quality",
        short: null,
        attributes: [11, 37, 45, 46, 47, 64, 74],
        sources: [
            "Quality in Business Process Modeling (Krogstie, 2016), p. 63 f"
        ],
        authors: [
            "Sandkuhl"
        ]
    }),
    new Approach({
        id: 18,
        name: "7 pragmatic guidelines",
        short: "7PMG",
        attributes: [10, 53, 54, 55, 56, 57, 58, 59, 62, 63, 64, 74],
        sources: [
            "Quality in Business Process Modeling (Krogstie, 2016), p. 88 f",
            "http://wwwis.win.tue.nl/~wvdaalst/publications/p574.pdf"
        ],
        authors: [
            "Moreno-Montes", "Snoeck"
        ]
    }),
    new Approach({
        id: 19,
        name: "use of reference models",
        short: null,
        attributes: [3, 4, 23, 25, 26, 28, 29, 64, 69, 70, 71, 72, 73, 74],
        sources: [
            "Quality in Business Process Modeling (Krogstie, 2016), p. 91 f"
        ],
        authors: [

        ]
    })
];
/**
 * the list contains all attributes of the evaluation approaches
 */
var attributes = [
    new Attribute({
        id: 1,
        title: "structural modeling",
        dim: 1
    }),
    new Attribute({
        id: 2,
        title: "realism",
        dim: 2
    }),
    new Attribute({
        id: 3,
        title: "generic",
        dim: 1
    }),
    new Attribute({
        id: 4,
        title: "idealism",
        dim: 2
    }),
    new Attribute({
        id: 5,
        title: "evaluating IS design methods measuring actual efficiency and effectiveness",
        dim: 3
    }),
    new Attribute({
        id: 6,
        title: "evaluating model quality based on various semiotic quality aspects",
        dim: 3
    }),
    new Attribute({
        id: 7,
        title: "goals",
        desc: "the set of goals of the modeling task",
        dim: 4,
        source: "Quality in Business Process Modeling (Krogstie, 2016), p. 67"
    }),
    new Attribute({
        id: 8,
        title: "language",
        desc: "the language extension, i.e., the set of all statements that are possible to make according to the rules of the modeling languages used",
        dim: 4,
        source: "Quality in Business Process Modeling (Krogstie, 2016), p. 67"
    }),
    new Attribute({
        id: 9,
        title: "externalized model",
        desc: "the externalized model itself represented on some physical medium",
        dim: 4,
        source: "Quality in Business Process Modeling (Krogstie, 2016), p. 67"
    }),
    new Attribute({
        id: 10,
        title: "process modeling",
        dim: 1
    }),
    new Attribute({
        id: 11,
        title: "enterprise modeling",
        dim: 1
    }),
    new Attribute({
        id: 12,
        title: "evaluating an enterprise model based on a defined method, setted roles and a participatory way of working",
        dim: 3
    }),
    new Attribute({
        id: 13,
        title: "evaluating quality of cartographic maps based on SEQUAL",
        dim: 3
    }),
    new Attribute({
        id: 14,
        title: "geography",
        dim: 1
    }),
    new Attribute({
        id: 15,
        title: "human computer interaction",
        dim: 1
    }),
    new Attribute({
        id: 16,
        title: "ontological metamodel comparison",
        dim: 3
    }),
    new Attribute({
        id: 17,
        title: "degree to which a set of inherent characteristics fulﬁls requirements",
        dim: 3
    }),
    new Attribute({
        id: 18,
        title: "functionality",
        desc: "A set of attributes that bear on the existence of a set of functions and their speciﬁed properties. The functions are those that satisfy stated or implied needs.",
        dim: 5,
        source: "Quality in Business Process Modeling (Krogstie, 2016), p. 54"
    }),
    new Attribute({
        id: 19,
        title: "reliability",
        desc: "A set of attributes that bear on the capability of software to maintain its level of performance under stated conditions for a stated period of time.",
        dim: 5,
        source: "Quality in Business Process Modeling (Krogstie, 2016), p. 54"
    }),
    new Attribute({
        id: 20,
        title: "efficiency",
        desc: "A set of attributes that bear on the relationship between the level of performance of the software and the amount of resources used, under stated conditions.",
        dim: 5,
        source: "Quality in Business Process Modeling (Krogstie, 2016), p. 54"
    }),
    new Attribute({
        id: 21,
        title: "usability",
        desc: "A set of attributes that bear on the effort needed for use, and on the individual assessment of such use, by a stated or implied set of users. Portability: How easy is it to transfer the software to another (technical) environment?",
        dim: 5,
        source: "Quality in Business Process Modeling (Krogstie, 2016), p. 54"
    }),
    new Attribute({
        id: 22,
        title: "maintainability",
        desc: "A set of attributes that bear on the effort needed to make speciﬁed modiﬁcations.",
        dim: 5,
        source: "Quality in Business Process Modeling (Krogstie, 2016), p. 54"
    }),
    new Attribute({
        id: 23,
        title: "physical quality",
        desc: "it must be physically represented in a persistent form that is available to those who will potentially want to reuse it",
        dim: 5,
        source: "Quality in Business Process Modeling (Krogstie, 2016), p. 66, 91"
    }),
    new Attribute({
        id: 24,
        title: "empirical quality",
        dim: 5,
        source: "Quality in Business Process Modeling (Krogstie, 2016), p. 66"
    }),
    new Attribute({
        id: 25,
        title: "syntactical quality",
        dim: 5,
        source: "Quality in Business Process Modeling (Krogstie, 2016), p. 66, 91"
    }),
    new Attribute({
        id: 26,
        title: "semantical quality",
        dim: 5,
        source: "Quality in Business Process Modeling (Krogstie, 2016), p. 66"
    }),
    new Attribute({
        id: 27,
        title: "pragmatic quality",
        dim: 5,
        source: "Quality in Business Process Modeling (Krogstie, 2016), p. 66"
    }),
    new Attribute({
        id: 28,
        title: "social quality",
        dim: 5,
        source: "Quality in Business Process Modeling (Krogstie, 2016), p. 66"
    }),
    new Attribute({
        id: 29,
        title: "deontic  quality",
        dim: 5,
        source: "Quality in Business Process Modeling (Krogstie, 2016), p. 66"
    }),
    new Attribute({
        id: 30,
        title: "domain",
        desc: "the domain, i.e., the set of all statements that can be stated about the situation",
        dim: 4,
        source: "Quality in Business Process Modeling (Krogstie, 2016), p. 67"
    }),
    new Attribute({
        id: 31,
        title: "actor",
        desc: "the part of the model that can be accessed by one or more actor, with potential actors being both persons and tools",
        dim: 4,
        source: "Quality in Business Process Modeling (Krogstie, 2016), p. 67"
    }),
    new Attribute({
        id: 32,
        title: "knowledge",
        desc: "the explicit knowledge about the domain that is relevant to the audience",
        dim: 4,
        source: "Quality in Business Process Modeling (Krogstie, 2016), p. 67"
    }),
    new Attribute({
        id: 33,
        title: "interpretation (social)",
        desc: "the social actor interpretation, i.e., the set of all statements that the audience interprets that an externalized model consists o",
        dim: 4,
        source: "Quality in Business Process Modeling (Krogstie, 2016), p. 67"
    }),
    new Attribute({
        id: 34,
        title: "interpretation (technical)",
        desc: "the technical actor interpretation, i.e., the statements in the model as “interpreted” by modeling tool",
        dim: 4,
        source: "Quality in Business Process Modeling (Krogstie, 2016), p. 67"
    }),
    new Attribute({
        id: 35,
        title: "Bunge-Wand-Weber (BWW)",
        dim: 6,
        source: "https://link-springer-com.wwwdb.dbod.de/content/pdf/10.1007%2Fs11219-011-9136-9.pdf"
    }),
    new Attribute({
        id: 36,
        title: "Lindland, Sindre, and Sølvberg framework (LSS)",
        dim: 6,
        source: "https://link-springer-com.wwwdb.dbod.de/content/pdf/10.1007%2Fs11219-011-9136-9.pdf"
    }),
    new Attribute({
        id: 37,
        title: "quality of enterprise models (QEM)",
        dim: 6,
        source: "Quality in Business Process Modeling (Krogstie, 2016), p. 63"
    }),
    new Attribute({
        id: 38,
        title: "completeness",
        desc: "the degree to which all relevant facts of the problem domain are included in the enterprise model",
        dim: 5,
        source: "Quality in Business Process Modeling (Krogstie, 2016), p. 63"
    }),
    new Attribute({
        id: 39,
        title: "correctness",
        desc: "refers to how well the enterprise model conforms to the rules of the modeling technique",
        dim: 5,
        source: "Quality in Business Process Modeling (Krogstie, 2016), p. 63"
    }),
    new Attribute({
        id: 40,
        title: "flexibility",
        desc: "is deﬁned as the ease with which the enterprise model can cope with changes in the modeling domain",
        dim: 5,
        source: "Quality in Business Process Modeling (Krogstie, 2016), p. 66"
    }),
    new Attribute({
        id: 41,
        title: "integration",
        desc: "refers to the degree of consistency between the different submodels that constitute the overall enterprise model. An enterprise model often contains different submodels, e.g., a process model, a goal model, an organizational model, and a systems model focusing on different modeling perspectives",
        dim: 5,
        source: "Quality in Business Process Modeling (Krogstie, 2016), p. 63"
    }),
    new Attribute({
        id: 42,
        title: "simplicity",
        desc: "refers to the degree of minimal use of modeling constructs for presenting knowledge in the enterprise model",
        dim: 5,
        source: "Quality in Business Process Modeling (Krogstie, 2016), p. 63"
    }),
    new Attribute({
        id: 43,
        title: "understandability",
        desc: "is deﬁned as the ease with which the concepts and structures in the enterprise model can be understood by stakeholder",
        dim: 5,
        source: "Quality in Business Process Modeling (Krogstie, 2016), p. 63"
    }),
    new Attribute({
        id: 44,
        title: "usability",
        desc: "is deﬁned as the ease with which the enterprise model can be used for its intended purpose. Just as with a business process model, an enterprise model can be used for achieving different goals",
        dim: 5,
        source: "Quality in Business Process Modeling (Krogstie, 2016), p. 63"
    }),
    new Attribute({
        id: 45,
        title: "guidelines to achieve the suggested criteria of quality provided by the QEM framework (Larsson & Segerberg)",
        dim: 3
    }),
    new Attribute({
        id: 46,
        title: "reducing ambiguity",
        desc: "Ambiguous models are hard to understand. In Sandkuhl et al. (2014), they give several concrete suggestions relative to the 4EM language, e.g., starting goal formulation with “The goal is…” Another aspect of ambiguity is lack of concrete detail and aspects that can be taken up and implemented. One solution is to identify concrete actions that need to be carried out connected to the models and who will be responsible for them.",
        dim: 5,
        source: "Quality in Business Process Modeling (Krogstie, 2016), p. 63"
    }),
    new Attribute({
        id: 47,
        title: "identifying areas of stability and ﬂexibility",
        desc: "A small change in the domain should not force to make large changes in the model. It should be possible to add or remove some statements from the model without major changes or restructuring the rest of the model.",
        dim: 5,
        source: "Quality in Business Process Modeling (Krogstie, 2016), p. 64"
    }),
    new Attribute({
        id: 48,
        title: "homogeneity of concepts",
        desc: "Having homogeneity of concepts (such that they do not cover too many things). A modeling concept is said to have a high degree of homogeneity if the phenomena it represents are very similar to one another and display the same kinds of properties and relationships. Homogeneity contributes to factors such as ﬂexibility, simplicity, understandability, and usability.",
        dim: 5,
        source: "Quality in Business Process Modeling (Krogstie, 2016), p. 64"
    }),
    new Attribute({
        id: 49,
        title: "clarifying the scope",
        desc: "Clarifying the scope of the model and working for completeness within the selected scope. An enterprise model should always have a well-deﬁned scope. The scope serves to decide what is important for modeling and what is not. Determining the scope precisely may, however, be difﬁcult: blurred scope, multiple scopes, covered scope, shifted scope.",
        dim: 5,
        source: "Quality in Business Process Modeling (Krogstie, 2016), p. 64"
    }),
    new Attribute({
        id: 50,
        title: "FRISCO framework",
        dim: 6,
        source: "Quality in Business Process Modeling (Krogstie, 2016), p. 65"
    }),
    new Attribute({
        id: 51,
        title: "three dimensions of requirements engineering",
        dim: 6,
        source: "Quality in Business Process Modeling (Krogstie, 2016), p. 65"
    }),
    new Attribute({
        id: 52,
        title: "SEQUAL",
        dim: 6,
        source: "Quality in Business Process Modeling (Krogstie, 2016), p. 70"
    }),
    new Attribute({
        id: 53,
        title: "use as few elements as possible",
        desc: "Use as few elements in the model as possible. The size of the model has undesirable effects on understandability and likelihood of errors: Largermodels tend to be more difficult to understand and have a higher error probability than small models.",
        dim: 5,
        source: "7PMG, http://wwwis.win.tue.nl/~wvdaalst/publications/p574.pdf, p. 10"
    }),
    new Attribute({
        id: 54,
        title: "minimize routing paths",
        desc: "Minimize the routing paths per element. The higher the degree of an element in the process model, i.e. the number of input and output arcs together, the harder it becomes to understand the model. There is a strong correlation between the number of modeling errors and the average or maximum degree of elements in a model.",
        dim: 5,
        source: "7PMG, http://wwwis.win.tue.nl/~wvdaalst/publications/p574.pdf, p. 11"
    }),
    new Attribute({
        id: 55,
        title: "model as structured as possible",
        desc: "A process model is structured if every split connector matches a respective join connector of the same type. Structured models can be seen as formulas with balanced brackets, i.e., every opening opening bracket has a corresponding closing bracket of the same type. Unstructured models are not only more likely to include errors, people also tend to understand them less easily.",
        dim: 5,
        source: "7PMG, http://wwwis.win.tue.nl/~wvdaalst/publications/p574.pdf, p. 10"
    }),
    new Attribute({
        id: 56,
        title: "use one start and one end event",
        desc: "The number of start and end events is positively connected with an increase in error probability. Most workflow engines require a single start and end node. Moreover, models satisfying this requirement are easier to understand and allow for all kinds or analysis (e.g., soundness checks).",
        dim: 5,
        source: "7PMG, http://wwwis.win.tue.nl/~wvdaalst/publications/p574.pdf, p. 11"
    }),
    new Attribute({
        id: 57,
        title: "avoid OR routing elements",
        desc: "Models that have only AND and XOR connectors are less error-prone. Furthermore, there are some ambiguities in the semantics of the OR-join leading to paradoxes and implementation problems.",
        dim: 5,
        source: "7PMG, http://wwwis.win.tue.nl/~wvdaalst/publications/p574.pdf, p. 10"
    }),
    new Attribute({
        id: 58,
        title: "use verb-object activity labels",
        desc: "A wide exploration of labeling styles that are used in actual process models, discloses the existence of two popular styles and a rest category. From these, people consider the verb-object style, like “Inform complainant”, as significantly less ambiguous and more useful than action-noun labels (e.g. “Complaint analysis”) or labels that follow neither of these styles (e.g. “Incident agenda”).",
        dim: 5,
        source: "7PMG, http://wwwis.win.tue.nl/~wvdaalst/publications/p574.pdf, p. 11"
    }),
    new Attribute({
        id: 59,
        title: "decompose large models",
        desc: "Decompose the model if it has more than 50 elements. This guideline relates to G1 that is motivated by a positive correlation between size and errors. For models with more than 50 elements the error probability tends to be higher than 50%. Therefore, large models should be split up into smaller models. Large sub-components with a single entry and a single exit can be replaced by one activity that points to the original subcomponent as a separate models.",
        dim: 5,
        source: "7PMG, http://wwwis.win.tue.nl/~wvdaalst/publications/p574.pdf, p. 11"
    }),
    new Attribute({
        id: 60,
        title: "top-down quality framework",
        dim: 3
    }),
    new Attribute({
        id: 61,
        title: "7PMG",
        desc: "7PMG focus on obtaining high-quality business process models in terms of their quality as a model,what we in SEQUAL place under empirical and syntactic qualities",
        dim: 7,
        source: "Quality in Business Process Modeling (Krogstie, 2016), p. 88"
    }),
    new Attribute({
        id: 62,
        title: "BPMN",
        dim: 8
    }),
    new Attribute({
        id: 63,
        title: "modeling language",
        dim: 9
    }),
    new Attribute({
        id: 64,
        title: "artifacts",
        dim: 9
    }),
    new Attribute({
        id: 65,
        title: "EPK",
        dim: 8
    }),
    new Attribute({
        id: 66,
        title: "node-edge-oriented modeling",
        dim: 1
    }),
    new Attribute({
        id: 67,
        title: "reference modeling",
        dim: 7
    }),    new Attribute({
        id: 68,
        title: "UML",
        dim: 8
    }),    
    new Attribute({
        id: 69,
        title: "successfully used, i.e. in SAP (EPK)",
        source: "Quality in Business Process Modeling (Krogstie, 2016), p. 92",
        dim: 11
    }),
    new Attribute({
        id: 70,
        title: "economic perspective",
        desc: "These criteria address different aspects of the costs and beneﬁts of using the reference model (cf. how reuse ties into the deontic quality level of SEQUAL). Although reference models are aimed at reducing costs, their use will also cause costs. Costs are in relation to the introduction (Table 2.3), transformation and analysis (Table 2.4), and maintenance of the reference models (Table 2.5). Using a reference model promises a number of beneﬁts. Two categories are proposed for this purpose: efﬁciency (Table 2.6) and ﬂexibility (Table 2.7). The relevance of each point depends a lot on the goal of modeling. As discussed in Chap. 1, one of the goals of all models should act to foster communication. An overview of aspects in this regard is found in Table 2.8. Taking into account that using a reference model can cause substantial investments, the question of how these investments are protected is a core issue, as outlined in Table 2.9.",
        source: "Quality in Business Process Modeling (Krogstie, 2016), p. 92",
        dim: 12
    }),
    new Attribute({
        id: 71,
        title: "deployment perspective",
        desc: "The success of a reference model depends heavily on the ability and willingness of the users to address the model. Important aspects in this regard are outlined in Table 2.10.",
        source: "Quality in Business Process Modeling (Krogstie, 2016), p. 92",
        dim: 12
    }),
    new Attribute({
        id: 72,
        title: "engineering perspective",
        desc: "From an engineering perspective, two questions are important: Does the model fulﬁll the requirements to be taken into account? Is the speciﬁcation appropriate for supporting the intended purposes of the model? These questions are detailed in Table 2.11.",
        source: "Quality in Business Process Modeling (Krogstie, 2016), p. 96",
        dim: 12
    }),
    new Attribute({
        id: 73,
        title: "epistemological perspective",
        desc: "This perspective serves to enrich the evaluation of reference models with epistemological considerations. Detailed aspects are described in Table 2.12.",
        source: "Quality in Business Process Modeling (Krogstie, 2016), p. 96",
        dim: 12
    }),
    new Attribute({
        id: 74,
        title: "theoretical artifacts",
        dim: 9
    }),
    new Attribute({
        id: 75,
        title: "executable artifacts",
        dim: 9
    }),
    new Attribute({
        id: 76,
        title: "evaluation of a modeling language based on the reference model",
        source: "Ontologische Evaluierung von Referenzmodellen auf Basis des Bunge-Wand-Weber-Modells (Fettke & Loos, 2003), p. 157",
        dim: 3
    }),
    new Attribute({
        id: 77,
        title: "BWW object",
        desc: "An elementary, physical object of the real world (e.g. person, book), no abstract objects (e.g. address, time). A BWW object can also be a composite object representing a set of BWW objects or BWW compositions. BWW objects has BWW properties.",
        source: "Ontologische Evaluierung von Referenzmodellen auf Basis des Bunge-Wand-Weber-Modells (Fettke & Loos, 2003), p. 158",
        dim: 4
    }),
    new Attribute({
        id: 78,
        title: "BWW property",
        desc: "BWW properties are always depicted on BWW objects used a function. They can be related to one or many objects. The missing of a BWW property is no property itself.",
        source: "Ontologische Evaluierung von Referenzmodellen auf Basis des Bunge-Wand-Weber-Modells (Fettke & Loos, 2003), p. 158",
        dim: 4
    }),
    new Attribute({
        id: 79,
        title: "BWW event",
        desc: "BWW events are defined by a change of a BWW object's state.",
        source: "Ontologische Evaluierung von Referenzmodellen auf Basis des Bunge-Wand-Weber-Modells (Fettke & Loos, 2003), p. 158",
        dim: 4
    }),
    new Attribute({
        id: 80,
        title: "BWW state",
        desc: "BWW states defines the state of a BWW object.",
        source: "Ontologische Evaluierung von Referenzmodellen auf Basis des Bunge-Wand-Weber-Modells (Fettke & Loos, 2003), p. 158",
        dim: 4
    }),
    new Attribute({
        id: 81,
        title: "BWW class",
        desc: "A BWW class is a set of BWW objects with one specific BWW property.",
        source: "Ontologische Evaluierung von Referenzmodellen auf Basis des Bunge-Wand-Weber-Modells (Fettke & Loos, 2003), p. 159",
        dim: 4
    }),
    new Attribute({
        id: 82,
        title: "BWW genus",
        desc: "A BWW genus is a set of BWW objects with more than one simular BWW property.",
        source: "Ontologische Evaluierung von Referenzmodellen auf Basis des Bunge-Wand-Weber-Modells (Fettke & Loos, 2003), p. 159",
        dim: 4
    }),
    new Attribute({
        id: 83,
        title: "reference model normalization",
        desc: "A concept containing a transformation of a reference model into an ontological model. The aim is to create a uniform and comparable representation of the structure of different reference models. It can be compared with the normalization of a databasescheme. The normalization contains at least four steps: construction of the transformation rules, identification of modeling deficits, transformation of the reference model and evaluation of the results.",
        source: "Ontologische Evaluierung von Referenzmodellen auf Basis des Bunge-Wand-Weber-Modells (Fettke & Loos, 2003), p. 157",
        dim: 3
    })
];
/**
 * the list contains all dimensions of the attributes
 */
var dimensions = [
    new Dimension({
        id: 1,
        title: "origin domain"
    }),
    new Dimension({
        id: 2,
        title: "ontological aspect"
    }),
    new Dimension({
        id: 3,
        title: "key characteristics"
    }),
    new Dimension({
        id: 4,
        title: "key aspects"
    }),
    new Dimension({
        id: 5,
        title: "quality characteristics/ guidelines"
    }),
    new Dimension({
        id: 6,
        title: "theoretical fundamentals"
    }),
    new Dimension({
        id: 7,
        title: "embeddable methods/ frameworks"
    }),
    new Dimension({
        id: 8,
        title: "evaluated modeling languages"
    }),
    new Dimension({
        id: 9,
        title: "subject of evaluation"
    }),
    new Dimension({
        id: 10,
        title: "empirical evaluation"
    }),
    new Dimension({
        id: 12,
        title: "considered perspectives"
    }),
    new Dimension({
        id: 11,
        title: "additional information"
    })
]
