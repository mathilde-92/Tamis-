// Glossaire complet des mécanismes de manipulation — 10 familles, 104 fiches.
// Séparé du reste de l'app pour ne pas alourdir App.jsx : ce fichier n'a besoin
// d'être chargé que lorsqu'on touche vraiment au glossaire.

import {
  AlertTriangle, Anchor, ArrowDown, ArrowLeftRight, Award, Battery, BellOff, Brain, Check, Clock,
  Crown, DoorOpen, Droplet, Eye, EyeOff, Frown, Hand, Heart, HelpCircle, Hourglass, Layers, Link2,
  Lock, MessageSquare, Moon, Quote, RefreshCw, Repeat, Repeat2, Scale, Shrink, Smile, Sparkles,
  Tag as TagIcon, Target, ThumbsUp, TrendingDown, User, UserMinus, Users, VolumeX, Zap,
} from "lucide-react";

export const MECANISMES = [

  // ---- Manipulation émotionnelle ----
  { cat: "Manipulation émotionnelle", mot: "Culpabilisation", icon: Hand, analyse: true,
    court: "Faire porter la faute à l'autre.",
    def: "La culpabilisation rend une personne responsable de la situation, des émotions ou des choix de l'autre, même quand ce n'est pas justifié. Chez certaines personnes, ce n'est même pas calculé : toute frustration est vécue pour cette personne comme forcément la faute de quelqu'un — ça ne rend pas la chose plus facile à porter.",
    effet: "On se sent obligé de se justifier, de réparer, ou de céder pour faire retomber la tension.",
    exemple: "« Si tu m'aimais vraiment, tu ne me ferais pas ça. »"
  },
  { cat: "Manipulation émotionnelle", mot: "Chantage affectif", icon: Heart, analyse: true,
    court: "Conditionner l'amour ou l'affection.",
    def: "Le chantage affectif lie l'affection, la relation ou l'approbation à un comportement attendu. L'amour devient une récompense ou une menace selon ce que l'on fait.",
    effet: "On agit par peur de perdre le lien plutôt que par choix libre.",
    exemple: "« Si tu pars ce soir, c'est fini entre nous. »"
  },
  { cat: "Manipulation émotionnelle", mot: "Menace", icon: AlertTriangle, analyse: true,
    court: "Faire peur pour obtenir quelque chose.",
    def: "La menace, explicite ou implicite, cherche à obtenir une réaction par la peur des conséquences plutôt que par l'échange.",
    effet: "Elle installe un climat d'insécurité où l'on agit pour éviter le danger annoncé.",
    exemple: "« Tu vas le regretter si tu fais ça. »"
  },
  { cat: "Manipulation émotionnelle", mot: "Honte", icon: Frown, analyse: true,
    court: "Créer un sentiment d'indignité.",
    def: "Provoquer la honte vise à faire sentir à l'autre qu'il ou elle est indigne, mauvais·e ou ridicule, pour l'affaiblir et le·la contrôler. Cela peut passer par un regard appuyé, une remarque sur le corps, ou la révélation d'un secret devant d'autres (voir « Utilisation d'un public »).",
    effet: "On se recroqueville, on n'ose plus s'affirmer ni demander.",
    exemple: "« Tu n'as pas honte de te comporter comme ça ? »"
  },
  { cat: "Manipulation émotionnelle", mot: "Victimisation", icon: Droplet, analyse: true,
    court: "Se poser en victime pour désarmer.",
    def: "La victimisation renverse la situation : la personne qui blesse se présente comme celle qui souffre, pour éviter toute remise en question. C'est une manœuvre « couteau suisse » : elle sert aussi bien à exiger un traitement de faveur qu'à refuser ses responsabilités ou à faire culpabiliser.",
    effet: "On s'occupe de ses émotions à elle, en oubliant ce que l'on vit soi-même.",
    exemple: "« Après tout ce que je fais, c'est moi qu'on accuse… »"
  },
  { cat: "Manipulation émotionnelle", mot: "Flatterie intéressée", icon: Award, analyse: true,
    court: "Complimenter pour mieux obtenir.",
    def: "La flatterie intéressée utilise le compliment non pas pour faire plaisir, mais pour désarmer la vigilance et obtenir quelque chose en retour.",
    effet: "On se sent redevable ou spécial·e, et on cède plus facilement.",
    exemple: "« Toi tu es tellement plus compréhensive que les autres, tu peux bien me prêter cet argent. »"
  },
  { cat: "Manipulation émotionnelle", mot: "Love bombing", icon: Heart, analyse: false,
    court: "Submerger d'attentions au début.",
    def: "Le love bombing est une avalanche de compliments, cadeaux et déclarations en début de relation, souvent disproportionnée, qui crée une dépendance rapide.",
    effet: "On se sent unique et redevable, ce qui rend plus difficile de voir les comportements problématiques ensuite.",
    exemple: "« Tu es la personne de ma vie, je ne peux plus me passer de toi. » (après quelques jours)"
  },
  { cat: "Manipulation émotionnelle", mot: "Future faking", icon: Sparkles, analyse: true,
    court: "Promettre un avenir pour retenir.",
    def: "Le future faking consiste à faire miroiter des promesses d'avenir (mariage, enfant, changement) sans intention réelle de les tenir, pour apaiser ou retenir la personne.",
    effet: "On reste dans l'espoir d'un futur qui ne vient jamais.",
    exemple: "« On se mariera l'an prochain, je te le promets, ne pars pas. »"
  },
  { cat: "Manipulation émotionnelle", mot: "Climat de terreur", icon: AlertTriangle, analyse: false,
    court: "Vivre en alerte, sans savoir quand ça va exploser.",
    def: "Des colères imprévisibles, des reproches flous et des sautes d'humeur installent une tension permanente. On ne sait jamais ce qui va déclencher la prochaine crise.",
    effet: "On finit par obéir d'avance, pour éviter l'orage — sans que rien n'ait été demandé.",
    exemple: "« Tu verras bien dans quel état je serai en rentrant. »"
  },
  { cat: "Manipulation émotionnelle", mot: "Vol de la joie", icon: Frown, analyse: false,
    court: "Éteindre systématiquement les bons moments.",
    def: "Chaque fois qu'une joie, une fierté ou un moment de calme s'installe, quelque chose vient l'éteindre : une critique, un doute glissé, une crise sans rapport, une mauvaise nouvelle.",
    effet: "On n'ose plus se réjouir, et le repos devient difficile — c'est souvent le soir, au moment de se coucher, que ça arrive.",
    exemple: "« Contente de ta promotion ? Bon, il faut qu'on parle d'un truc grave. »"
  },
  { cat: "Manipulation émotionnelle", mot: "Prophétie", icon: Hourglass, analyse: false,
    court: "Annoncer un avenir sombre.",
    def: "Prédire l'échec, la solitude ou le malheur avec assez d'assurance pour que la prédiction s'installe dans la tête de l'autre et le décourage d'avance.",
    effet: "On doute de ses projets et on se limite soi-même, comme si l'avenir était déjà écrit.",
    exemple: "« Tu ne trouveras jamais personne qui te supporte. »"
  },
  { cat: "Manipulation émotionnelle", mot: "Cadeau empoisonné", icon: Award, analyse: false,
    court: "Un cadeau qui oblige ou qui piège.",
    def: "Un geste qui a l'apparence de la générosité mais qui encombre, contraint ou met en difficulté celle ou celui qui le reçoit.",
    effet: "On doit dire merci pour quelque chose qui complique la vie, et on n'ose plus s'en plaindre.",
    exemple: "Offrir un animal dont il sait très bien qu'elle n'aura pas le temps de s'occuper."
  },
  { cat: "Manipulation émotionnelle", mot: "Réciprocité contrainte", icon: RefreshCw, analyse: false,
    court: "Donner pour rendre l'autre redevable.",
    def: "Rendre service, offrir, aider beaucoup — non pour faire plaisir, mais pour créer une dette qu'il faudra rembourser, souvent au moment le moins opportun.",
    effet: "On se sent obligé·e, et refuser devient impossible sans passer pour ingrat·e.",
    exemple: "« Après tout ce que j'ai fait pour toi, tu ne vas quand même pas me refuser ça. »"
  },
  { cat: "Manipulation émotionnelle", mot: "Abus de confiance", icon: Link2, analyse: false,
    court: "Endormir la méfiance, puis en profiter.",
    def: "Gagner la confiance par des promesses et de grands principes, puis s'en servir pour prendre — du temps, de l'argent, de l'énergie, de l'intimité — sans rien rendre.",
    effet: "Quand on découvre, on se sent trahi·e et souvent honteux·se d'avoir « laissé faire ».",
    exemple: "« Tu peux tout me confier, ça restera entre nous. » — et l'information ressort plus tard, contre elle."
  },

  // ---- Manipulation relationnelle ----
  { cat: "Manipulation relationnelle", mot: "Isolement", icon: UserMinus, analyse: true,
    court: "Couper des autres.",
    def: "L'isolement consiste à éloigner peu à peu une personne de son entourage (amis, famille, collègues), souvent sous couvert d'amour ou de protection — en dénigrant l'entourage, en semant la zizanie, ou par un « c'est moi ou eux ».",
    effet: "Privé de regards extérieurs, on perd les repères qui permettraient de nommer la situation.",
    exemple: "« Tes amis ne t'apportent rien, on est tellement mieux tous les deux. »"
  },
  { cat: "Manipulation relationnelle", mot: "Silence punitif", icon: BellOff, analyse: true,
    court: "Punir par le retrait.",
    def: "Le silence punitif (ou « traitement par le silence ») consiste à ignorer délibérément une personne pour la punir ou la contraindre.",
    effet: "On ressent un rejet anxiogène et on cherche à apaiser l'autre à tout prix.",
    exemple: "Ne plus adresser la parole pendant des jours après un désaccord."
  },
  { cat: "Manipulation relationnelle", mot: "Stonewalling", icon: VolumeX, analyse: true,
    court: "Refuser toute discussion.",
    def: "Le stonewalling (mur du silence) consiste à refuser tout échange : quitter la pièce, se fermer, ignorer, pour empêcher toute résolution du conflit.",
    effet: "On reste seul·e avec le problème, sans jamais pouvoir en parler.",
    exemple: "Dès qu'un sujet gêne, l'autre quitte la conversation ou fait comme s'il n'entendait pas."
  },
  { cat: "Manipulation relationnelle", mot: "Intermittence (chaud-froid)", icon: Repeat2, analyse: true,
    court: "Alterner tendresse et attaques.",
    def: "L'alternance imprévisible entre gestes doux (compliments, affection) et attaques (reproches, froideur) crée confusion et dépendance. Un compliment glissé au milieu de reproches n'est pas un moment sain : il entretient l'espoir et brouille le jugement.",
    effet: "On reste accroché·e en espérant le retour des bons moments, ce qui rend le départ plus difficile.",
    exemple: "« Tu es insupportable… mais bon, t'es vraiment quelqu'un de bien quand même. »"
  },
  { cat: "Manipulation relationnelle", mot: "Triangulation", icon: Target, analyse: true,
    court: "Faire intervenir un tiers.",
    def: "La triangulation introduit une troisième personne (réelle ou évoquée) pour créer de la rivalité, de la jalousie ou valider son point de vue.",
    effet: "On se sent en compétition et insécurisé, et le lien direct devient impossible.",
    exemple: "« Mon ex, elle, ne m'aurait jamais parlé comme ça. »"
  },
  { cat: "Manipulation relationnelle", mot: "Ferrage", icon: Clock, analyse: false,
    court: "Resserrer le contrôle une fois attaché·e.",
    def: "Le ferrage désigne le resserrement progressif du contrôle une fois l'attachement installé : les exigences augmentent petit à petit.",
    effet: "On accepte peu à peu ce qu'on aurait refusé au début, sans voir la ligne se déplacer.",
    exemple: "« Maintenant qu'on est ensemble, envoie-moi ta localisation en permanence. »"
  },
  { cat: "Manipulation relationnelle", mot: "Hoovering", icon: RefreshCw, analyse: true,
    court: "Faire revenir après une rupture.",
    def: "Le hoovering (de « Hoover », aspirateur) désigne les tentatives de « ré-aspirer » la personne après une séparation, par de grandes excuses, des promesses ou des cadeaux.",
    effet: "On retombe dans le cycle, en croyant que cette fois sera différente.",
    exemple: "Après la rupture : « J'ai compris mes erreurs, je ne peux pas vivre sans toi. »"
  },
  { cat: "Manipulation relationnelle", mot: "Campagne de diffamation", icon: Users, analyse: true,
    court: "Salir ton image auprès des autres.",
    def: "La campagne de diffamation vise à dégrader l'image de la personne auprès de l'entourage — en inventant des propos qu'elle n'a jamais tenus (la calomnie) — souvent pour expliquer un échec, se donner le beau rôle, ou l'empêcher d'être crue si elle se plaignait. Très fréquent en contexte de séparation ou de procédure.",
    effet: "On se retrouve isolé·e, et on n'ose plus se confier de peur de ne pas être cru·e.",
    exemple: "Il raconte à tout le monde qu'« elle est instable et qu'elle invente tout »."
  },
  { cat: "Manipulation relationnelle", mot: "Comparaison rabaissante", icon: TrendingDown, analyse: true,
    court: "Te mesurer à quelqu'un d'autre, à ton désavantage.",
    def: "Comparer la personne, son corps, son travail ou ses efforts à quelqu'un d'autre pour montrer qu'elle fait moins bien.",
    effet: "On se sent insuffisant·e et on en fait toujours plus pour rattraper une barre qui se déplace.",
    exemple: "« La femme de mon collègue, elle, arrive à tout gérer sans se plaindre. »"
  },
  { cat: "Manipulation relationnelle", mot: "Semer la zizanie", icon: Users, analyse: false,
    court: "Provoquer des conflits entre les autres.",
    def: "Rapporter des propos inventés, donner des consignes différentes à chacun, créer des situations qui font s'affronter les gens — puis nier toute responsabilité.",
    effet: "Les liens autour de soi se tendent, et on se retrouve isolé·e sans bien comprendre pourquoi.",
    exemple: "« Ta sœur a dit que tu exagérais, mais surtout ne lui répète pas. »"
  },
  { cat: "Manipulation relationnelle", mot: "Harcèlement", icon: Repeat2, analyse: true,
    court: "Répéter jusqu'à l'épuisement.",
    def: "Répétition de messages, de demandes, de reproches ou de surveillance. C'est le nombre et l'insistance — plus que chaque acte pris isolément — qui font la gravité.",
    effet: "On cède par fatigue, et chaque fait pris seul paraît « pas si grave » quand on essaie de le raconter.",
    exemple: "Trente messages en une soirée parce qu'on n'a pas répondu tout de suite."
  },
  { cat: "Manipulation relationnelle", mot: "Double visage", icon: EyeOff, analyse: false,
    court: "Charmant dehors, dur en privé.",
    def: "Montrer à l'extérieur un visage aimable et apprécié, et réserver l'hostilité à l'intimité. Le contraste peut aussi alterner dans la relation : très doux juste après avoir été très dur.",
    effet: "Personne ne croit ce qu'on raconte, et on finit par douter de sa propre perception.",
    exemple: "Adorable devant les amis toute la soirée, glacial dès que la porte se referme."
  },
  { cat: "Manipulation relationnelle", mot: "Flagrant délit", icon: Target, analyse: false,
    court: "Pousser à la faute pour pouvoir accuser.",
    def: "Provoquer une réaction — une colère, un mensonge, un écart — puis la brandir comme preuve : « tu vois bien que le problème, c'est toi ».",
    effet: "On se sent coupable de sa propre réaction, et on oublie ce qui l'a déclenchée.",
    exemple: "Provoquer jusqu'à l'explosion, puis filmer la colère pour la montrer aux autres."
  },

  // ---- Manipulation par le langage ----
  { cat: "Manipulation par le langage", mot: "Présupposé", icon: HelpCircle, analyse: true,
    court: "Glisser une accusation cachée.",
    def: "Le présupposé insère une affirmation non prouvée dans la formulation, comme si elle était déjà admise, ce qui rend difficile de la contester.",
    effet: "On se retrouve à devoir se défendre d'une accusation jamais posée clairement.",
    exemple: "« Depuis que tu es devenue agressive, on ne peut plus rien te dire. »"
  },
  { cat: "Manipulation par le langage", mot: "Recadrage", icon: RefreshCw, analyse: true,
    court: "Redéfinir la réalité à son avantage.",
    def: "Le recadrage réécrit le sens d'un événement pour effacer la responsabilité de son auteur (« ce n'était pas méchant, c'était de l'humour »).",
    effet: "On finit par douter de sa propre lecture des faits.",
    exemple: "« Ce n'était pas une insulte, c'était une blague, tu ne comprends rien. »"
  },
  { cat: "Manipulation par le langage", mot: "Généralisation", icon: Repeat, analyse: true,
    court: "« Toujours », « jamais ».",
    def: "La généralisation exagère un comportement ponctuel en le présentant comme systématique (« tu fais toujours… », « tu ne fais jamais… »).",
    effet: "On se sent enfermé·e dans un défaut et jugé·e sur l'ensemble plutôt que sur un fait précis.",
    exemple: "« Tu fais toujours tout de travers. »"
  },
  { cat: "Manipulation par le langage", mot: "Injonction paradoxale", icon: ArrowLeftRight, analyse: true,
    court: "Donner deux consignes incompatibles.",
    def: "L'injonction paradoxale enferme dans une situation où, quoi qu'on fasse, c'est perdant : des demandes contradictoires sont posées en même temps, c'est donc impossible de nourrir les différentes demandes de l'autre.",
    effet: "On se sent piégé, confus, et fautif quelle que soit la réponse choisie.",
    exemple: "« Sois plus spontané·e — mais ne fais jamais rien sans me demander. »"
  },
  { cat: "Manipulation par le langage", mot: "Double contrainte", icon: ArrowLeftRight, analyse: true,
    court: "Quoi que tu fasses, tu as tort.",
    def: "La double contrainte (le « double lien ») enferme dans deux options qui mènent toutes deux à un reproche : il n'existe aucune « bonne » réponse possible, et quelle que soit la chose faite, on reproche celle qui n'a pas été faite.",
    effet: "On se sent paralysé·e et coupable quel que soit son choix.",
    exemple: "« Si tu pars, tu m'abandonnes ; si tu restes, tu m'étouffes. »"
  },
  { cat: "Manipulation par le langage", mot: "Passif-agressif", icon: MessageSquare, analyse: true,
    court: "Une agressivité déguisée.",
    def: "Le comportement passif-agressif exprime l'hostilité de façon indirecte : sous-entendus, silences, reproches déguisés, ironie.",
    effet: "On ressent une tension réelle sans pouvoir la nommer, ce qui rend le dialogue difficile.",
    exemple: "« Non non, tout va bien… fais comme tu veux, comme d'habitude. »"
  },
  { cat: "Manipulation par le langage", mot: "Ordre flou", icon: HelpCircle, analyse: true,
    court: "Demander sans dire quoi.",
    def: "Donner une consigne volontairement vague, puis reprocher le résultat quel qu'il soit — puisque rien n'a jamais été précisé.",
    effet: "On s'épuise à deviner, et on se sent stupide de ne pas avoir compris.",
    exemple: "« Tu sais très bien ce que tu as à faire. »"
  },
  { cat: "Manipulation par le langage", mot: "Reproche ambigu", icon: Layers, analyse: true,
    court: "Être accusé·e sans savoir de quoi.",
    def: "Un reproche appuyé mais incompréhensible, qu'on ne peut ni réfuter ni réparer parce qu'il n'est jamais formulé clairement.",
    effet: "On tourne en boucle à chercher sa faute, et on offre des compensations pour faire cesser le malaise.",
    exemple: "« Tu sais très bien ce que tu as fait. »"
  },
  { cat: "Manipulation par le langage", mot: "Nuage d'encre", icon: Layers, analyse: true,
    court: "Noyer la question au lieu d'y répondre.",
    def: "Face à une question gênante, répondre par un flot de mots, de termes savants, de demi-vérités ou d'agacement, jusqu'à ce que la question disparaisse d'elle-même.",
    effet: "On renonce à demander, en se disant qu'on n'a rien compris.",
    exemple: "« C'est beaucoup plus compliqué que ça, tu ne peux pas comprendre. »"
  },
  { cat: "Manipulation par le langage", mot: "Caricature", icon: Quote, analyse: true,
    court: "Déformer tes propos pour les rendre absurdes.",
    def: "Reformuler ce que l'autre a dit en le grossissant ou en le sortant de son contexte, souvent avec une image ou une comparaison, pour le rendre ridicule.",
    effet: "On n'ose plus s'exprimer, de peur que ses mots soient retournés.",
    exemple: "« Donc selon toi je suis un monstre, c'est ça ? »"
  },
  { cat: "Manipulation par le langage", mot: "Plus c'est gros, plus ça passe", icon: Zap, analyse: true,
    court: "Affirmer l'énorme avec aplomb.",
    def: "Asséner une contrevérité évidente avec une assurance totale. C'est la conviction affichée, pas la solidité des faits, qui emporte l'adhésion.",
    effet: "On doute de soi devant tant d'assurance, et on finit par se taire.",
    exemple: "« Je n'ai jamais élevé la voix de ma vie, demande à n'importe qui. »"
  },
  { cat: "Manipulation par le langage", mot: "Pétition de principe", icon: Scale, analyse: true,
    court: "Afficher des valeurs qu'on n'applique pas.",
    def: "Énoncer avec conviction de grands principes — honnêteté, respect, loyauté — sans intention de s'y tenir, pour rassurer l'autre et gagner du temps.",
    effet: "On accorde sa confiance à des mots, puis on se reproche de ne pas avoir vu venir.",
    exemple: "« Chez moi, la franchise passe avant tout. »"
  },

  // ---- Distorsion du réel ----
  { cat: "Distorsion du réel", mot: "Gaslighting", icon: Brain, analyse: true,
    court: "Faire douter de sa propre perception.",
    def: "Le gaslighting consiste à amener une personne à douter de sa mémoire, de son ressenti ou de sa perception des faits. Les phrases typiques nient une réalité pourtant vécue.",
    effet: "Avec le temps, on peut finir par ne plus se fier à son propre jugement et chercher constamment une validation extérieure.",
    exemple: "« Tu exagères, je n'ai jamais dit ça — tu te fais des films. »"
  },
  { cat: "Distorsion du réel", mot: "Mensonge & déni", icon: EyeOff, analyse: false,
    court: "Nier l'évidence.",
    def: "Le déni nie des faits pourtant établis, parfois avec aplomb, pour réécrire la réalité partagée — c'est la falsification : masquer ou déformer une partie de la réalité pour la rendre plus flatteuse, au point, souvent, d'y croire soi-même.",
    effet: "On doute de ce qu'on a vu ou entendu, et la confiance dans l'échange s'érode.",
    exemple: "« Je n'ai jamais promis ça, tu confonds. »"
  },
  { cat: "Distorsion du réel", mot: "Minimisation", icon: Shrink, analyse: true,
    court: "Réduire la portée de ses actes.",
    def: "La minimisation consiste à présenter un comportement blessant comme anodin, exagéré par l'autre, ou sans importance.",
    effet: "On finit par taire ce qu'on ressent, croyant réagir de façon disproportionnée.",
    exemple: "« C'était une blague, tu prends tout au sérieux. »"
  },
  { cat: "Distorsion du réel", mot: "Renversement de responsabilité", icon: Repeat, analyse: true,
    court: "Retourner la faute vers vous.",
    def: "Le renversement de responsabilité consiste à vous attribuer la cause de ses propres comportements ou émotions, pour que vous vous sentiez coupable à sa place — en démontrant que c'est vous qui avez fauté, ou que la faute a été commise à cause de vous.",
    effet: "On finit par s'excuser et porter un poids qui ne nous revient pas.",
    exemple: "« Si je m'énerve, c'est parce que tu me pousses à bout. »"
  },
  { cat: "Distorsion du réel", mot: "Projection", icon: Repeat, analyse: false,
    court: "Attribuer à l'autre ses propres torts.",
    def: "La projection consiste à reprocher à l'autre exactement ce que l'on fait soi-même, renversant les rôles. C'est le plus souvent inconscient : la personne n'y voit pas un jeu, elle attribue vraiment à l'autre ce qu'elle ne peut pas reconnaître en elle — l'effet sur qui le reçoit reste le même.",
    effet: "On finit par se défendre d'accusations qui décrivent en réalité le comportement de l'autre.",
    exemple: "« C'est toi qui es jaloux et contrôlant. » (de la part de celui qui contrôle)"
  },
  { cat: "Distorsion du réel", mot: "Confusion", icon: Layers, analyse: true,
    court: "Multiplier les versions pour désorienter.",
    def: "La confusion accumule contradictions, demi-vérités et changements de version pour empêcher de penser clairement et de se positionner.",
    effet: "On ne sait plus quoi croire, on perd ses repères et sa capacité à décider.",
    exemple: "« Je n'ai jamais dit ça… enfin si, mais pas comme ça, et de toute façon c'est toi qui as commencé. »"
  },
  { cat: "Distorsion du réel", mot: "Normalisation progressive", icon: ArrowDown, analyse: true,
    court: "S'habituer peu à peu à l'inacceptable.",
    def: "La normalisation progressive fait accepter, petit à petit, des comportements qu'on aurait refusés au début. Le seuil de ce qui est « tolérable » se déplace sans qu'on le voie.",
    effet: "Des faits graves finissent par paraître ordinaires.",
    exemple: "Les insultes, d'abord choquantes, deviennent « juste sa façon de parler »."
  },
  { cat: "Distorsion du réel", mot: "DARVO", icon: ArrowLeftRight, analyse: false,
    court: "Nier, attaquer, inverser les rôles.",
    def: "DARVO décrit une réaction face à une mise en cause : Nier les faits, Attaquer la personne qui les soulève, et Renverser les rôles victime/responsable.",
    effet: "On se retrouve à se défendre et à culpabiliser, alors qu'on signalait un tort subi.",
    exemple: "« Ça n'est jamais arrivé, tu es manipulateur, et en plus tu me fais du mal. »"
  },
  { cat: "Distorsion du réel", mot: "Poubelle psychique", icon: ArrowDown, analyse: true,
    court: "Tout ce qui va mal, c'est toi.",
    def: "Une répartition systématique : les réussites reviennent à l'un, les erreurs, les échecs et les torts sont attribués à l'autre.",
    effet: "On porte la responsabilité de tout, y compris de ce qu'on n'a pas fait.",
    exemple: "« Si le dossier a raté, c'est parce que tu m'as déconcentré. »"
  },
  { cat: "Distorsion du réel", mot: "Savoir mieux que toi", icon: Brain, analyse: true,
    court: "Décréter ce que tu penses et ressens.",
    def: "Affirmer connaître les pensées, les intentions ou les émotions de l'autre mieux que lui-même, et le présenter comme une évidence.",
    effet: "On ne sait plus faire confiance à son propre ressenti, et l'échange devient impossible.",
    exemple: "« Tu dis ça, mais au fond tu sais très bien que tu m'en veux. »"
  },

  // ---- Dévalorisation & attaque de l'identité ----
  { cat: "Dévalorisation & attaque de l'identité", mot: "Dévalorisation", icon: ArrowDown, analyse: true,
    court: "Attaquer l'estime de soi.",
    def: "La dévalorisation rabaisse une personne par des critiques répétées, des moqueries ou des comparaisons défavorables.",
    effet: "À force, on peut douter de soi, de sa valeur et de sa légitimité à exister tel qu'on est.",
    exemple: "« De toute façon, tu es incapable de comprendre. »"
  },
  { cat: "Dévalorisation & attaque de l'identité", mot: "Étiquetage", icon: TagIcon, analyse: true,
    court: "Décréter qui tu es, pas ce que tu fais.",
    def: "L'étiquetage consiste à coller une définition négative sur ta personne même (« tu es… »), et non sur un comportement. Sous emprise, à force de l'entendre, on finit par le croire et se définir soi-même par ce que l'autre a décidé.",
    effet: "L'image de soi se déforme peu à peu pour épouser l'étiquette imposée.",
    exemple: "« De toute façon, toi, t'es quelqu'un qui ment. »"
  },
  { cat: "Dévalorisation & attaque de l'identité", mot: "Humiliation", icon: TrendingDown, analyse: false,
    court: "Rabaisser, souvent en public.",
    def: "L'humiliation cherche à rabaisser une personne, fréquemment devant d'autres (voir « Utilisation d'un public »), pour l'atteindre dans sa dignité.",
    effet: "On se sent petit·e, exposé·e, et on n'ose plus prendre sa place.",
    exemple: "« Regarde-toi, tu es ridicule devant tout le monde. »"
  },
  { cat: "Dévalorisation & attaque de l'identité", mot: "Sarcasme / mépris", icon: Quote, analyse: false,
    court: "Attaquer sous couvert d'ironie.",
    def: "Le sarcasme déguise une attaque en trait d'humour, ce qui permet de blesser tout en niant l'intention (« c'était pour rire »).",
    effet: "On encaisse la pique sans pouvoir vraiment répondre, sous peine de « ne pas avoir d'humour ».",
    exemple: "« Bravo, encore une idée de génie de ta part… »"
  },
  { cat: "Dévalorisation & attaque de l'identité", mot: "Attaque par surprise", icon: AlertTriangle, analyse: false,
    court: "Frapper au moment où tu ne t'y attends pas.",
    def: "Lancer un reproche ou une accusation dans un moment de détente, de fête ou de fatigue, quand la garde est baissée.",
    effet: "L'effet est décuplé : on est pris·e de court, sans réponse — et le souvenir du moment est gâché.",
    exemple: "Une accusation lâchée en plein repas d'anniversaire."
  },
  { cat: "Dévalorisation & attaque de l'identité", mot: "Utilisation d'un public", icon: Users, analyse: false,
    court: "Attaquer devant témoins.",
    def: "Choisir la présence d'autres personnes pour rabaisser, révéler un secret ou faire un reproche. La présence de témoins empêche de répondre.",
    effet: "La honte est plus forte, et se défendre reviendrait à s'exposer encore davantage.",
    exemple: "Raconter un détail intime à table, « pour rire »."
  },
  { cat: "Dévalorisation & attaque de l'identité", mot: "Écoute aversive", icon: VolumeX, analyse: false,
    court: "Écouter en montrant que ça n'intéresse pas.",
    def: "Manifester ostensiblement sa distraction pendant que l'autre parle : téléphone, soupirs, regard ailleurs, réponses à côté.",
    effet: "On se sent inintéressant·e, on abrège — et le sujet n'a jamais à être traité.",
    exemple: "Faire défiler son écran en répondant « oui oui » pendant qu'elle raconte sa journée."
  },
  { cat: "Dévalorisation & attaque de l'identité", mot: "Déni de l'autre", icon: EyeOff, analyse: false,
    court: "Faire comme si tu n'existais pas.",
    def: "Ignorer la présence, les demandes ou les besoins de l'autre — non par une attaque, mais par une absence de réaction.",
    effet: "Difficile à nommer et à reprocher, cela atteint le sentiment même d'exister pour l'autre.",
    exemple: "Ne pas répondre, ne pas regarder, poursuivre comme si personne n'avait parlé."
  },
  { cat: "Dévalorisation & attaque de l'identité", mot: "Maladresse volontaire", icon: ThumbsUp, analyse: false,
    court: "Blesser en faisant mine de ne pas l'avoir voulu.",
    def: "Un mot ou un geste qui atteint précisément là où ça fait mal, aussitôt couvert par « je ne l'ai pas fait exprès ».",
    effet: "On encaisse sans pouvoir protester, sous peine de passer pour susceptible.",
    exemple: "Casser « par accident » l'objet auquel elle tenait le plus."
  },

  // ---- Emprise, contrôle & pouvoir ----
  { cat: "Emprise, contrôle & pouvoir", mot: "Emprise", icon: Link2, analyse: false,
    court: "Une domination progressive.",
    def: "L'emprise est une prise de pouvoir psychologique progressive sur une personne, qui réduit peu à peu sa liberté de penser et d'agir.",
    effet: "On perd en autonomie et on en vient à organiser sa vie autour de l'autre, souvent sans s'en apercevoir.",
    exemple: "Renoncer à ses amis, ses goûts, ses décisions pour éviter les conflits."
  },
  { cat: "Emprise, contrôle & pouvoir", mot: "Cycle de la violence", icon: RefreshCw, analyse: false,
    court: "Tension, crise, réconciliation, répétition.",
    def: "La violence relationnelle suit souvent un cycle : montée de tension, explosion, justification, puis phase d'apaisement (« lune de miel ») avant que tout recommence.",
    effet: "La phase d'apaisement entretient l'espoir que « ça va changer », ce qui rend le départ plus difficile.",
    exemple: "Une dispute violente suivie d'excuses et de promesses, puis d'une nouvelle montée de tension."
  },
  { cat: "Emprise, contrôle & pouvoir", mot: "Lune de miel", icon: Moon, analyse: false,
    court: "L'accalmie qui fait rester.",
    def: "Phase du cycle où la personne redevient attentionnée et promet de changer, juste après un épisode difficile.",
    effet: "On se raccroche à ces moments doux, en espérant qu'ils reviennent durablement.",
    exemple: "« Pardonne-moi, ça n'arrivera plus jamais, tu comptes tellement pour moi. »"
  },
  { cat: "Emprise, contrôle & pouvoir", mot: "Contrôle coercitif", icon: Lock, analyse: false,
    court: "Un système de domination quotidien.",
    def: "Le contrôle coercitif est un ensemble de comportements (surveillance, règles, menaces, contrôle de l'argent) qui restreignent durablement la liberté d'une personne.",
    effet: "La vie quotidienne se réorganise autour des exigences de l'autre, par peur des conséquences.",
    exemple: "Devoir justifier chaque dépense, chaque sortie, chaque message."
  },
  { cat: "Emprise, contrôle & pouvoir", mot: "Contrôle / Intrusion", icon: Eye, analyse: true,
    court: "Surveiller ou envahir l'espace personnel.",
    def: "Le contrôle cherche à surveiller, limiter ou diriger les faits et gestes d'une personne. Cela peut toucher l'espace physique (entrer sans prévenir), l'espace intime (fouiller un sac, un téléphone, un journal), l'espace relationnel (s'immiscer dans une conversation ou une amitié), et jusqu'au regard (imposer de voir, ou forcer à montrer).",
    effet: "On perd en autonomie et en liberté de mouvement, parfois sans s'en rendre compte au début.",
    exemple: "« Montre-moi ton téléphone, je veux savoir à qui tu parles. »"
  },
  { cat: "Emprise, contrôle & pouvoir", mot: "Abus de pouvoir", icon: Crown, analyse: true,
    court: "Se servir d'une position pour contraindre.",
    def: "Utiliser une position — hiérarchique, familiale, financière, statutaire — au-delà de ce qu'elle permet, pour contrôler, contrarier ou soumettre.",
    effet: "Refuser paraît risqué, alors on cède — et on doute de son droit à protester.",
    exemple: "« Ici, c'est moi qui décide de tes horaires. Et de qui tu vois le week-end. »"
  },
  { cat: "Emprise, contrôle & pouvoir", mot: "Droits spéciaux", icon: Crown, analyse: true,
    court: "Se croire au-dessus des règles communes.",
    def: "Considérer comme évident d'avoir droit à mieux, plus vite, sans attendre — et faire un scandale quand ce n'est pas le cas.",
    effet: "L'entourage cède pour éviter l'esclandre, ce qui confirme la croyance et la renforce.",
    exemple: "« Je n'ai pas à attendre comme tout le monde. »"
  },
  { cat: "Emprise, contrôle & pouvoir", mot: "Redéfinition des rôles", icon: Repeat, analyse: false,
    court: "S'attribuer le travail des autres.",
    def: "Laisser croire qu'on a fait plus qu'on n'a réellement fait, et s'attribuer un rôle ou des mérites qui reviennent à quelqu'un d'autre.",
    effet: "On voit ses efforts effacés, sans pouvoir le dire sans passer pour mesquin·e.",
    exemple: "« Heureusement que j'étais là pour tout organiser. » — alors qu'elle a tout fait."
  },
  { cat: "Emprise, contrôle & pouvoir", mot: "Imposture", icon: User, analyse: false,
    court: "Se faire passer pour plus qu'on n'est.",
    def: "Embellir son parcours, ses réussites ou ses relations, et s'approprier le prestige des autres pour soutenir une image flatteuse de soi.",
    effet: "On doute de sa propre lecture, parce que l'assurance affichée est convaincante.",
    exemple: "« J'ai monté cette boîte tout seul. » — alors que le travail était collectif."
  },
  { cat: "Emprise, contrôle & pouvoir", mot: "Sabotage", icon: TrendingDown, analyse: false,
    court: "Dire oui, puis faire échouer.",
    def: "Donner son accord à un projet, puis en empêcher discrètement la réalisation — oublis, retards, obstacles — avant de reprocher l'échec à l'autre.",
    effet: "On se croit responsable d'un échec qu'on n'a pas causé.",
    exemple: "Accepter la sortie, puis tout faire traîner jusqu'à ce qu'elle soit annulée."
  },
  { cat: "Emprise, contrôle & pouvoir", mot: "Vol du territoire", icon: Link2, analyse: false,
    court: "S'approprier ce qui est à toi.",
    def: "S'installer dans l'espace de l'autre comme s'il était le sien : ses affaires, son logement, ses amis, ses idées, ses réussites.",
    effet: "On perd ses repères et le sentiment d'avoir un espace bien à soi.",
    exemple: "Raconter comme siennes les idées ou les réussites de l'autre."
  },
  { cat: "Emprise, contrôle & pouvoir", mot: "Pression sexuelle", icon: AlertTriangle, analyse: false,
    court: "Insister jusqu'à ce que l'autre cède.",
    def: "Solliciter de façon répétée un rapport ou une pratique dont l'autre ne veut pas, en s'appuyant sur la culpabilité, la bouderie, le chantage ou l'insistance. Céder par épuisement n'est pas consentir.",
    effet: "On finit par accepter pour avoir la paix, avec un sentiment de honte difficile à nommer.",
    exemple: "« Si tu m'aimais vraiment, tu ne me refuserais pas ça. »",
    repere: "Un rapport obtenu par contrainte, menace, violence ou surprise est une infraction, y compris au sein d'un couple. Le 3919 informe et oriente, gratuitement et anonymement.",
  },
  { cat: "Emprise, contrôle & pouvoir", mot: "Rivalité avec l'enfant", icon: Users, analyse: false,
    court: "Un parent qui entre en compétition.",
    def: "Un parent jaloux de la jeunesse, de la beauté ou des réussites de son enfant cherche à le rabaisser ou à l'empêcher d'avancer, au lieu de le soutenir.",
    effet: "L'enfant apprend à se faire petit pour ne pas déclencher l'hostilité, et doute longtemps de sa valeur.",
    exemple: "« Tu te crois meilleure que moi ? On verra bien ce que tu vaux. »"
  },
  { cat: "Emprise, contrôle & pouvoir", mot: "Climat incestuel", icon: EyeOff, analyse: false,
    court: "Une ambiance sexualisée, sans passage à l'acte.",
    def: "Sans geste sexuel, une ambiance de propos, de regards ou d'attitudes teintés de sexualité entre un adulte et un enfant efface la frontière entre les générations.",
    effet: "L'enfant met souvent des années à comprendre que ce climat n'était pas normal, faute de fait précis à montrer.",
    exemple: "Des commentaires réguliers sur le corps de l'adolescente, « pour rire »."
  },

  // ---- Techniques d'engagement progressif ----
  { cat: "Techniques d'engagement progressif", mot: "Porte-au-nez", icon: DoorOpen, analyse: false,
    court: "Grosse demande, puis une plus petite.",
    def: "La technique de la porte-au-nez consiste à formuler une demande énorme (vouée au refus), pour qu'ensuite une demande plus petite paraisse raisonnable, presque un soulagement.",
    effet: "On accepte la seconde demande par contraste, sans la remettre en question.",
    exemple: "« Tu ne veux pas emménager ? Bon, alors laisse-moi au moins une clé de chez toi. »"
  },
  { cat: "Techniques d'engagement progressif", mot: "Amorçage", icon: RefreshCw, analyse: false,
    court: "Changer les règles après l'accord.",
    def: "L'amorçage (low-ball) consiste à obtenir un accord sur des conditions attirantes, puis à en changer les termes une fois l'engagement pris.",
    effet: "On se sent tenu·e par l'accord initial et on accepte des conditions qu'on aurait refusées d'emblée.",
    exemple: "« Tu avais dit oui pour ce week-end… en fait ce sera toute la semaine chez mes parents. »"
  },
  { cat: "Techniques d'engagement progressif", mot: "Pied dans la porte", icon: DoorOpen, analyse: false,
    court: "Commencer petit pour obtenir grand.",
    def: "La technique du pied dans la porte consiste à obtenir d'abord un accord facile sur une toute petite demande, pour ensuite en demander une plus grande — qu'on aurait refusée si elle avait été posée en premier.",
    effet: "On se sent engagé·e par ce qu'on a déjà accepté, et refuser la suite paraît incohérent.",
    exemple: "« On regarde juste un appart ensemble, pour voir » — puis la signature du bail arrive vite."
  },

  // ---- Leviers d'influence ----
  { cat: "Leviers d'influence", mot: "Réciprocité", icon: RefreshCw, analyse: false,
    court: "Se sentir obligé·e de rendre.",
    def: "Le principe de réciprocité fait qu'on se sent redevable après avoir reçu un cadeau, une faveur ou une confidence — même non sollicités.",
    effet: "On dit oui par obligation ressentie plutôt que par choix.",
    exemple: "« Je t'ai payé le restaurant, tu peux bien me rendre ce service. »"
  },
  { cat: "Leviers d'influence", mot: "Preuve sociale", icon: Users, analyse: false,
    court: "Suivre ce que fait la majorité.",
    def: "La preuve sociale pousse à s'aligner sur ce que « tout le monde » ferait ou penserait, surtout dans le doute.",
    effet: "On doute de son propre ressenti face à une prétendue majorité.",
    exemple: "« Tout le monde trouve que tu exagères. »"
  },
  { cat: "Leviers d'influence", mot: "Autorité", icon: Crown, analyse: false,
    court: "Obéir à une figure de pouvoir.",
    def: "Le principe d'autorité fait céder plus facilement face à quelqu'un qui affiche expertise, statut ou position de pouvoir, réels ou prétendus.",
    effet: "On s'incline sans vérifier, par respect ou crainte de l'autorité.",
    exemple: "« Je suis ton père, tu me dois le respect quoi qu'il arrive. »"
  },
  { cat: "Leviers d'influence", mot: "Rareté / peur de perdre", icon: Hourglass, analyse: false,
    court: "Créer l'urgence de ne pas rater.",
    def: "La rareté donne de la valeur à ce qui est présenté comme rare ou sur le point de disparaître, et active la peur de perdre.",
    effet: "On agit dans la précipitation pour ne pas « rater sa chance ».",
    exemple: "« C'est ta dernière chance, après je m'en vais pour de bon. »"
  },
  { cat: "Leviers d'influence", mot: "Sympathie", icon: Smile, analyse: false,
    court: "On dit oui à qui nous plaît.",
    def: "On accède plus facilement aux demandes des personnes qui nous plaisent, nous ressemblent ou nous complimentent.",
    effet: "Le lien de sympathie abaisse la vigilance.",
    exemple: "« On se ressemble tellement, toi et moi, tu vas bien me comprendre. »"
  },
  { cat: "Leviers d'influence", mot: "Engagement & cohérence", icon: Check, analyse: false,
    court: "Vouloir rester fidèle à ce qu'on a déjà dit.",
    def: "Une fois qu'on a dit ou fait quelque chose, on cherche inconsciemment à rester cohérent avec ce premier engagement, même minime. C'est le ressort derrière la technique du « pied dans la porte » : un premier oui facile prépare le terrain pour un second, plus grand.",
    effet: "On se sent tenu·e par ses propres mots ou actes passés, et revenir en arrière paraît incohérent — presque malhonnête envers soi-même.",
    exemple: "« Tu avais dit que tu me faisais confiance, pourquoi tu changes d'avis maintenant ? »"
  },
  { cat: "Leviers d'influence", mot: "Unité / appartenance", icon: Users, analyse: false,
    court: "Le « nous » qui abaisse la vigilance.",
    def: "Se sentir membre d'un même groupe — un couple, une famille, un clan — pousse à accorder plus facilement sa confiance et à se montrer moins critique envers les siens.",
    effet: "On baisse sa garde parce que « c'est nous », et on juge moins sévèrement ce qu'on refuserait venant d'un·e inconnu·e.",
    exemple: "« On est une famille, entre nous ça ne sort pas, tu comprends. »"
  },

  // ---- Biais cognitifs ----
  { cat: "Biais cognitifs", mot: "Biais de confirmation", icon: Check, analyse: false,
    court: "Ne voir que ce qui confirme.",
    def: "Le biais de confirmation pousse à remarquer surtout les informations qui confortent ce qu'on croit déjà, et à écarter le reste.",
    effet: "On peut s'accrocher à l'image positive de l'autre en ignorant les signaux qui dérangent.",
    exemple: "Retenir les gestes tendres et oublier les épisodes blessants."
  },
  { cat: "Biais cognitifs", mot: "Coûts irrécupérables", icon: Hourglass, analyse: false,
    court: "Rester à cause de ce qu'on a investi.",
    def: "Le biais des coûts irrécupérables (ou « biais d'engagement ») pousse à continuer une relation parce qu'on y a déjà consacré beaucoup de temps, d'énergie ou d'amour — comme si partir « gâchait » cet investissement.",
    effet: "On reste pour ne pas « avoir tout fait pour rien », même quand la relation fait souffrir.",
    exemple: "« Après dix ans ensemble, je ne peux pas partir maintenant. »"
  },
  { cat: "Biais cognitifs", mot: "Effet de halo", icon: Sparkles, analyse: false,
    court: "Une qualité en masque le reste.",
    def: "L'effet de halo fait qu'une impression positive (charme, réussite) déteint sur tout le reste, au point d'excuser des comportements problématiques.",
    effet: "On a du mal à croire que quelqu'un d'apprécié de tous puisse faire du mal en privé.",
    exemple: "« Il est si gentil avec les autres, le souci vient sûrement de moi. »"
  },
  { cat: "Biais cognitifs", mot: "Biais d'optimisme", icon: Sparkles, analyse: false,
    court: "Croire que ça va s'arranger.",
    def: "Le biais d'optimisme conduit à surestimer la probabilité que les choses s'améliorent d'elles-mêmes.",
    effet: "On reporte les décisions, en attendant un changement qui ne vient pas.",
    exemple: "« Ça va se calmer, c'est juste une période difficile. »"
  },
  { cat: "Biais cognitifs", mot: "Ancrage", icon: Anchor, analyse: false,
    court: "Rester fixé sur la première impression.",
    def: "L'ancrage fait que la première information reçue (le « vrai » début de la relation, une promesse) sert de référence et pèse trop lourd dans le jugement.",
    effet: "On compare sans cesse au « début », en espérant retrouver cette version idéalisée.",
    exemple: "« Au début il était parfait, je sais qu'il peut redevenir comme ça. »"
  },
  { cat: "Biais cognitifs", mot: "Aversion à la perte", icon: Hourglass, analyse: false,
    court: "La peur de perdre pèse très lourd.",
    def: "L'aversion à la perte fait que la crainte de perdre quelque chose pèse plus lourd, dans nos décisions, que l'envie de gagner l'équivalent.",
    effet: "On reste ou on cède pour ne pas perdre ce qu'on a déjà investi.",
    exemple: "« Si tu pars, tu perdras tout ce qu'on a construit ensemble. »"
  },
  { cat: "Biais cognitifs", mot: "Cadrage", icon: RefreshCw, analyse: false,
    court: "La formulation change la décision.",
    def: "Le cadrage présente la même réalité sous un angle choisi pour orienter la décision (« ce n'est pas du contrôle, c'est de l'attention »).",
    effet: "On accepte une chose formulée joliment qu'on aurait refusée dite crûment.",
    exemple: "« Ce n'est pas de la jalousie, c'est parce que je t'aime. »"
  },
  { cat: "Biais cognitifs", mot: "Habituation", icon: Repeat, analyse: false,
    court: "L'anormal devient « normal ».",
    def: "À force de répétition, des comportements anormaux finissent par sembler ordinaires : le seuil de tolérance monte sans qu'on s'en aperçoive.",
    effet: "On minimise des faits graves parce qu'ils sont devenus habituels.",
    exemple: "« C'est rien, on se dispute comme ça tous les jours, c'est normal. »"
  },
  { cat: "Biais cognitifs", mot: "Illusion de contrôle", icon: Target, analyse: true,
    court: "Croire qu'être parfaite fera changer l'autre.",
    def: "L'illusion de contrôle fait croire que si l'on se comporte parfaitement, l'autre finira par changer ou par arrêter ses comportements blessants.",
    effet: "On s'épuise à « bien faire », en portant une responsabilité qui n'est pas la sienne.",
    exemple: "« Si je fais tout ce qu'il me demande bien comme il faut, il arrêtera. »"
  },
  { cat: "Biais cognitifs", mot: "Conformisme", icon: Users, analyse: false,
    court: "Suivre le groupe.",
    def: "Le conformisme pousse à s'aligner sur le groupe, à ne pas contredire, surtout quand l'entourage soutient la personne qui manipule.",
    effet: "On tait ses doutes et on se sent seul·e à voir le problème.",
    exemple: "Ne pas oser critiquer devant les amis communs qui « l'adorent »."
  },
  { cat: "Biais cognitifs", mot: "Croyance en un monde juste", icon: Scale, analyse: false,
    court: "Penser que chacun mérite son sort.",
    def: "Ce biais fait croire que le monde est juste et que, si quelqu'un souffre, c'est qu'il ou elle l'a « mérité » — ce qui conduit à blâmer les victimes.",
    effet: "On se blâme soi-même pour ce qu'on subit.",
    exemple: "« Si ça m'arrive, c'est peut-être que je l'ai cherché. »"
  },
  { cat: "Biais cognitifs", mot: "Erreur d'attribution", icon: User, analyse: false,
    court: "Juger l'être, pas le contexte.",
    def: "L'erreur fondamentale d'attribution consiste à expliquer les actes d'une personne par sa personnalité plutôt que par la situation (« elle est faible » plutôt que « elle est prise dans une emprise »).",
    effet: "On juge durement les victimes au lieu de comprendre le mécanisme qui les piège.",
    exemple: "« Si elle reste, c'est qu'elle est faible. » (alors que l'emprise explique tout autrement)"
  },

  // ---- Effets sur soi & santé mentale ----
  { cat: "Effets sur soi & santé mentale", mot: "Dissonance cognitive", icon: Brain, analyse: false,
    court: "Quand deux vérités s'opposent.",
    def: "La dissonance cognitive est l'inconfort ressenti quand nos actes et nos valeurs (ou deux croyances) se contredisent. On cherche alors à réduire cet écart.",
    effet: "Pour apaiser le malaise, on peut minimiser ce qu'on vit ou trouver des excuses à l'autre.",
    exemple: "« Il me blesse, mais je sais qu'au fond il m'aime. »"
  },
  { cat: "Effets sur soi & santé mentale", mot: "Lien traumatique", icon: Heart, analyse: false,
    court: "S'attacher à qui nous blesse.",
    def: "Le lien traumatique (trauma bonding) est un attachement puissant qui se forme dans l'alternance de violence et de réconfort, renforcé par les phases d'apaisement.",
    effet: "On reste très attaché malgré la souffrance, et la séparation paraît presque impossible.",
    exemple: "Se sentir incapable de partir, même en reconnaissant que la relation fait mal."
  },
  { cat: "Effets sur soi & santé mentale", mot: "Hypervigilance", icon: Eye, analyse: false,
    court: "Être en alerte permanente.",
    def: "L'hypervigilance est un état de vigilance extrême où l'on guette en continu les signes de danger ou de changement d'humeur de l'autre.",
    effet: "On vit dans la tension, épuisé·e d'anticiper les réactions.",
    exemple: "Scruter le ton d'un message pour deviner si « ça va aller » ce soir."
  },
  { cat: "Effets sur soi & santé mentale", mot: "Charge mentale", icon: Brain, analyse: false,
    court: "Tout porter en silence.",
    def: "La charge mentale est le poids invisible de devoir penser, organiser et anticiper en permanence, souvent seul·e.",
    effet: "Elle épuise sans être visible, et le repos seul ne suffit plus à la soulager.",
    exemple: "Avoir l'esprit constamment occupé par ce qu'il faut gérer pour tout le monde."
  },
  { cat: "Effets sur soi & santé mentale", mot: "Sentiment d'impuissance", icon: Battery, analyse: false,
    court: "Croire qu'on ne peut rien changer.",
    def: "À force de tentatives sans effet, on peut finir par croire qu'aucune action ne changera la situation — un sentiment d'impuissance acquise.",
    effet: "On cesse d'essayer, même quand des solutions existent réellement.",
    exemple: "« De toute façon, quoi que je dise, ça ne sert à rien. »"
  },
  { cat: "Effets sur soi & santé mentale", mot: "Perte d'estime de soi", icon: User, analyse: false,
    court: "Ne plus se reconnaître de valeur.",
    def: "L'exposition répétée à la critique et au dénigrement peut éroder l'image qu'on a de soi et de ses capacités.",
    effet: "On doute de ses choix, on s'excuse beaucoup, on n'ose plus prendre de place.",
    exemple: "Penser systématiquement que les problèmes viennent de soi."
  },
  { cat: "Effets sur soi & santé mentale", mot: "Rationalisation", icon: Brain, analyse: false,
    court: "Excuser l'autre pour tenir.",
    def: "La rationalisation consiste à trouver des explications rassurantes aux comportements blessants de l'autre, pour rendre la situation supportable.",
    effet: "On excuse l'inexcusable et on reporte le moment de se protéger.",
    exemple: "« Il est stressé en ce moment, je comprends qu'il réagisse comme ça vu ce qu'il vit. »"
  },
  { cat: "Effets sur soi & santé mentale", mot: "Dissociation", icon: EyeOff, analyse: false,
    court: "Se couper de ses émotions.",
    def: "La dissociation est un mécanisme de survie : face à un stress intense, l'esprit se « déconnecte » des émotions ou de la scène, comme pour se protéger.",
    effet: "On se sent spectateur·rice de sa propre vie, anesthésié·e.",
    exemple: "Pendant une dispute violente, se sentir « à côté », comme si ça arrivait à quelqu'un d'autre."
  },
  { cat: "Effets sur soi & santé mentale", mot: "Identification à l'agresseur", icon: User, analyse: false,
    court: "Adopter le point de vue de l'autre.",
    def: "L'identification à l'agresseur amène la personne à épouser le regard de celui qui la blesse, jusqu'à défendre ses comportements.",
    effet: "On justifie l'autre et on retourne la faute contre soi.",
    exemple: "« Au fond il a raison de s'énerver, c'est moi qui le pousse à bout. »"
  },
  { cat: "Effets sur soi & santé mentale", mot: "Sidération", icon: AlertTriangle, analyse: false,
    court: "Être figé·e face au choc.",
    def: "La sidération est un blocage psychologique face à un choc : le cerveau, submergé, empêche momentanément de réagir, de parler ou de fuir.",
    effet: "On « n'a rien pu dire ni faire » sur le moment — ce n'est pas de la faiblesse, c'est une réaction de survie.",
    exemple: "Rester figée, incapable de répondre, pendant une scène violente."
  },
];
