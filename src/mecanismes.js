// Glossaire complet des mécanismes de manipulation.
// Organisé en 2 axes et 10 familles, 133 fiches.
// Axe 1 — Ce que fait l'auteur : Pression émotionnelle et affective, Contrôle de la
//   relation et de l'environnement, Manipulation du discours et du raisonnement,
//   Altération de la réalité et de la responsabilité, Dévalorisation et atteinte à
//   l'identité, Pouvoir domination et emprise, Techniques d'influence et d'engagement.
// Axe 2 — Ce que ça produit chez la cible : Mécanismes d'attachement et de maintien
//   dans la relation, Effets psychologiques et cognitifs, Biais cognitifs favorisant
//   la prise ou le maintien.
// Séparé du reste de l'app pour ne pas alourdir App.jsx : ce fichier n'a besoin
// d'être chargé que lorsqu'on touche vraiment au glossaire.

import {
  AlertTriangle, Anchor, ArrowDown, ArrowLeftRight, Award, Battery, BellOff, Brain, Check, Clock,
  Crown, DoorOpen, Droplet, Eye, EyeOff, Frown, Hand, Heart, HelpCircle, Hourglass, Layers, Link2,
  Lock, MessageSquare, Moon, Quote, RefreshCw, Repeat, Repeat2, Scale, Shrink, Smile, Sparkles,
  Tag as TagIcon, Target, ThumbsUp, TrendingDown, User, UserMinus, Users, VolumeX, Zap,
} from "lucide-react";

// Les 2 grands axes du glossaire, et la famille (cat) à laquelle appartient chacun.
export const AXES = ["Ce que fait l'auteur", "Ce que ça produit chez la cible"];

export const FAMILLE_AXE = {
  "Pression émotionnelle et affective": "Ce que fait l'auteur",
  "Contrôle de la relation et de l'environnement": "Ce que fait l'auteur",
  "Manipulation du discours et du raisonnement": "Ce que fait l'auteur",
  "Altération de la réalité et de la responsabilité": "Ce que fait l'auteur",
  "Dévalorisation et atteinte à l'identité": "Ce que fait l'auteur",
  "Pouvoir, domination et emprise": "Ce que fait l'auteur",
  "Techniques d'influence et d'engagement": "Ce que fait l'auteur",
  "Mécanismes d'attachement et de maintien dans la relation": "Ce que ça produit chez la cible",
  "Effets psychologiques et cognitifs": "Ce que ça produit chez la cible",
  "Biais cognitifs favorisant la prise ou le maintien": "Ce que ça produit chez la cible",
};

export const MECANISMES = [

  // ---- AXE 1 — CE QUE FAIT L'AUTEUR — Pression émotionnelle et affective ----
  { cat: "Pression émotionnelle et affective", mot: "Culpabilisation", icon: Hand, analyse: true,
    court: "Faire porter la faute à l'autre.",
    def: "La culpabilisation rend une personne responsable de la situation, des émotions ou des choix de l'autre, même quand ce n'est pas justifié. Chez certaines personnes, ce n'est même pas calculé : toute frustration est vécue pour cette personne comme forcément la faute de quelqu'un — ça ne rend pas la chose plus facile à porter.",
    effet: "On se sent obligé de se justifier, de réparer, ou de céder pour faire retomber la tension.",
    exemple: "« Si tu m'aimais vraiment, tu ne me ferais pas ça. »"
  },
  { cat: "Pression émotionnelle et affective", mot: "Chantage affectif", icon: Heart, analyse: true,
    court: "Conditionner l'amour ou l'affection.",
    def: "Le chantage affectif lie l'affection, la relation ou l'approbation à un comportement attendu. L'amour devient une récompense ou une menace selon ce que l'on fait.",
    effet: "On agit par peur de perdre le lien plutôt que par choix libre.",
    exemple: "« Si tu pars ce soir, c'est fini entre nous. »"
  },
  { cat: "Pression émotionnelle et affective", mot: "Menace", icon: AlertTriangle, analyse: true,
    court: "Faire peur pour obtenir quelque chose.",
    def: "La menace, explicite ou implicite, cherche à obtenir une réaction par la peur des conséquences plutôt que par l'échange.",
    effet: "Elle installe un climat d'insécurité où l'on agit pour éviter le danger annoncé.",
    exemple: "« Tu vas le regretter si tu fais ça. »"
  },
  { cat: "Pression émotionnelle et affective", mot: "Honte", icon: Frown, analyse: true,
    court: "Créer un sentiment d'indignité.",
    def: "Provoquer la honte vise à faire sentir à l'autre qu'il ou elle est indigne, mauvais·e ou ridicule, pour l'affaiblir et le·la contrôler. Cela peut passer par un regard appuyé, une remarque sur le corps, ou la révélation d'un secret devant d'autres (voir « Utilisation d'un public »).",
    effet: "On se recroqueville, on n'ose plus s'affirmer ni demander.",
    exemple: "« Tu n'as pas honte de te comporter comme ça ? »"
  },
  { cat: "Pression émotionnelle et affective", mot: "Victimisation", icon: Droplet, analyse: true,
    court: "Se poser en victime pour désarmer.",
    def: "La victimisation renverse la situation : la personne qui blesse se présente comme celle qui souffre, pour éviter toute remise en question. C'est une manœuvre « couteau suisse » : elle sert aussi bien à exiger un traitement de faveur qu'à refuser ses responsabilités ou à faire culpabiliser.",
    effet: "On s'occupe de ses émotions à elle, en oubliant ce que l'on vit soi-même.",
    exemple: "« Après tout ce que je fais, c'est moi qu'on accuse… »"
  },
  { cat: "Pression émotionnelle et affective", mot: "Flatterie intéressée", icon: Award, analyse: true,
    court: "Complimenter pour mieux obtenir.",
    def: "La flatterie intéressée utilise le compliment non pas pour faire plaisir, mais pour désarmer la vigilance et obtenir quelque chose en retour.",
    effet: "On se sent redevable ou spécial·e, et on cède plus facilement.",
    exemple: "« Toi tu es tellement plus compréhensive que les autres, tu peux bien me prêter cet argent. »"
  },
  { cat: "Pression émotionnelle et affective", mot: "Love bombing", icon: Heart, analyse: false,
    court: "Submerger d'attentions au début.",
    def: "Le love bombing est une avalanche de compliments, cadeaux et déclarations en début de relation, souvent disproportionnée, qui crée une dépendance rapide.",
    effet: "On se sent unique et redevable, ce qui rend plus difficile de voir les comportements problématiques ensuite.",
    exemple: "« Tu es la personne de ma vie, je ne peux plus me passer de toi. » (après quelques jours)"
  },
  { cat: "Pression émotionnelle et affective", mot: "Future faking", icon: Sparkles, analyse: true,
    court: "Promettre un avenir pour retenir.",
    def: "Le future faking consiste à faire miroiter des promesses d'avenir (mariage, enfant, changement) sans intention réelle de les tenir, pour apaiser ou retenir la personne.",
    effet: "On reste dans l'espoir d'un futur qui ne vient jamais.",
    exemple: "« On se mariera l'an prochain, je te le promets, ne pars pas. »"
  },
  { cat: "Pression émotionnelle et affective", mot: "Climat de terreur", icon: AlertTriangle, analyse: false,
    court: "Vivre en alerte, sans savoir quand ça va exploser.",
    def: "Des colères imprévisibles, des reproches flous et des sautes d'humeur installent une tension permanente. On ne sait jamais ce qui va déclencher la prochaine crise.",
    effet: "On finit par obéir d'avance, pour éviter l'orage — sans que rien n'ait été demandé.",
    exemple: "« Tu verras bien dans quel état je serai en rentrant. »"
  },
  { cat: "Pression émotionnelle et affective", mot: "Vol de la joie", icon: Frown, analyse: false,
    court: "Éteindre systématiquement les bons moments.",
    def: "Chaque fois qu'une joie, une fierté ou un moment de calme s'installe, quelque chose vient l'éteindre : une critique, un doute glissé, une crise sans rapport, une mauvaise nouvelle.",
    effet: "On n'ose plus se réjouir, et le repos devient difficile — c'est souvent le soir, au moment de se coucher, que ça arrive.",
    exemple: "« Contente de ta promotion ? Bon, il faut qu'on parle d'un truc grave. »"
  },
  { cat: "Pression émotionnelle et affective", mot: "Prophétie", icon: Hourglass, analyse: false,
    court: "Annoncer un avenir sombre.",
    def: "Prédire l'échec, la solitude ou le malheur avec assez d'assurance pour que la prédiction s'installe dans la tête de l'autre et le décourage d'avance.",
    effet: "On doute de ses projets et on se limite soi-même, comme si l'avenir était déjà écrit.",
    exemple: "« Tu ne trouveras jamais personne qui te supporte. »"
  },
  { cat: "Pression émotionnelle et affective", mot: "Cadeau empoisonné", icon: Award, analyse: false,
    court: "Un cadeau qui oblige ou qui piège.",
    def: "Un geste qui a l'apparence de la générosité mais qui encombre, contraint ou met en difficulté celle ou celui qui le reçoit.",
    effet: "On doit dire merci pour quelque chose qui complique la vie, et on n'ose plus s'en plaindre.",
    exemple: "Offrir un animal dont il sait très bien qu'elle n'aura pas le temps de s'occuper."
  },
  { cat: "Pression émotionnelle et affective", mot: "Réciprocité contrainte", icon: RefreshCw, analyse: false,
    court: "Donner pour rendre l'autre redevable.",
    def: "Rendre service, offrir, aider beaucoup — non pour faire plaisir, mais pour créer une dette qu'il faudra rembourser, souvent au moment le moins opportun.",
    effet: "On se sent obligé·e, et refuser devient impossible sans passer pour ingrat·e.",
    exemple: "« Après tout ce que j'ai fait pour toi, tu ne vas quand même pas me refuser ça. »"
  },
  { cat: "Pression émotionnelle et affective", mot: "Abus de confiance", icon: Link2, analyse: false,
    court: "Endormir la méfiance, puis en profiter.",
    def: "Gagner la confiance par des promesses et de grands principes, puis s'en servir pour prendre — du temps, de l'argent, de l'énergie, de l'intimité — sans rien rendre.",
    effet: "Quand on découvre, on se sent trahi·e et souvent honteux·se d'avoir « laissé faire ».",
    exemple: "« Tu peux tout me confier, ça restera entre nous. » — et l'information ressort plus tard, contre elle."
  },

  // ---- Contrôle de la relation et de l'environnement ----
  { cat: "Contrôle de la relation et de l'environnement", mot: "Isolement", icon: UserMinus, analyse: true,
    court: "Couper des autres.",
    def: "L'isolement consiste à éloigner peu à peu une personne de son entourage (amis, famille, collègues), souvent sous couvert d'amour ou de protection — en dénigrant l'entourage, en semant la zizanie, ou par un « c'est moi ou eux ».",
    effet: "Privé de regards extérieurs, on perd les repères qui permettraient de nommer la situation.",
    exemple: "« Tes amis ne t'apportent rien, on est tellement mieux tous les deux. »"
  },
  { cat: "Contrôle de la relation et de l'environnement", mot: "Silence punitif", icon: BellOff, analyse: true,
    court: "Punir par le retrait.",
    def: "Le silence punitif (ou « traitement par le silence ») consiste à ignorer délibérément une personne pour la punir ou la contraindre.",
    effet: "On ressent un rejet anxiogène et on cherche à apaiser l'autre à tout prix.",
    exemple: "Ne plus adresser la parole pendant des jours après un désaccord."
  },
  { cat: "Contrôle de la relation et de l'environnement", mot: "Stonewalling", icon: VolumeX, analyse: true,
    court: "Refuser toute discussion.",
    def: "Le stonewalling (mur du silence) consiste à refuser tout échange : quitter la pièce, se fermer, ignorer, pour empêcher toute résolution du conflit.",
    effet: "On reste seul·e avec le problème, sans jamais pouvoir en parler.",
    exemple: "Dès qu'un sujet gêne, l'autre quitte la conversation ou fait comme s'il n'entendait pas."
  },
  { cat: "Contrôle de la relation et de l'environnement", mot: "Intermittence (chaud-froid)", icon: Repeat2, analyse: true,
    court: "Alterner tendresse et attaques.",
    def: "L'alternance imprévisible entre gestes doux (compliments, affection) et attaques (reproches, froideur) crée confusion et dépendance. Un compliment glissé au milieu de reproches n'est pas un moment sain : il entretient l'espoir et brouille le jugement.",
    effet: "On reste accroché·e en espérant le retour des bons moments, ce qui rend le départ plus difficile.",
    exemple: "« Tu es insupportable… mais bon, t'es vraiment quelqu'un de bien quand même. »"
  },
  { cat: "Contrôle de la relation et de l'environnement", mot: "Triangulation", icon: Target, analyse: true,
    court: "Faire intervenir un tiers.",
    def: "La triangulation introduit une troisième personne (réelle ou évoquée) pour créer de la rivalité, de la jalousie ou valider son point de vue.",
    effet: "On se sent en compétition et insécurisé, et le lien direct devient impossible.",
    exemple: "« Mon ex, elle, ne m'aurait jamais parlé comme ça. »"
  },
  { cat: "Contrôle de la relation et de l'environnement", mot: "Ferrage", icon: Clock, analyse: false,
    court: "Resserrer le contrôle une fois attaché·e.",
    def: "Le ferrage désigne le resserrement progressif du contrôle une fois l'attachement installé : les exigences augmentent petit à petit.",
    effet: "On accepte peu à peu ce qu'on aurait refusé au début, sans voir la ligne se déplacer.",
    exemple: "« Maintenant qu'on est ensemble, envoie-moi ta localisation en permanence. »"
  },
  { cat: "Contrôle de la relation et de l'environnement", mot: "Hoovering", icon: RefreshCw, analyse: true,
    court: "Faire revenir après une rupture.",
    def: "Le hoovering (de « Hoover », aspirateur) désigne les tentatives de « ré-aspirer » la personne après une séparation, par de grandes excuses, des promesses ou des cadeaux.",
    effet: "On retombe dans le cycle, en croyant que cette fois sera différente.",
    exemple: "Après la rupture : « J'ai compris mes erreurs, je ne peux pas vivre sans toi. »"
  },
  { cat: "Contrôle de la relation et de l'environnement", mot: "Campagne de diffamation", icon: Users, analyse: true,
    court: "Salir ton image auprès des autres.",
    def: "La campagne de diffamation vise à dégrader l'image de la personne auprès de l'entourage — en inventant des propos qu'elle n'a jamais tenus (la calomnie) — souvent pour expliquer un échec, se donner le beau rôle, ou l'empêcher d'être crue si elle se plaignait. Très fréquent en contexte de séparation ou de procédure.",
    effet: "On se retrouve isolé·e, et on n'ose plus se confier de peur de ne pas être cru·e.",
    exemple: "Il raconte à tout le monde qu'« elle est instable et qu'elle invente tout »."
  },
  { cat: "Contrôle de la relation et de l'environnement", mot: "Comparaison rabaissante", icon: TrendingDown, analyse: true,
    court: "Te mesurer à quelqu'un d'autre, à ton désavantage.",
    def: "Comparer la personne, son corps, son travail ou ses efforts à quelqu'un d'autre pour montrer qu'elle fait moins bien.",
    effet: "On se sent insuffisant·e et on en fait toujours plus pour rattraper une barre qui se déplace.",
    exemple: "« La femme de mon collègue, elle, arrive à tout gérer sans se plaindre. »"
  },
  { cat: "Contrôle de la relation et de l'environnement", mot: "Semer la zizanie", icon: Users, analyse: false,
    court: "Provoquer des conflits entre les autres.",
    def: "Rapporter des propos inventés, donner des consignes différentes à chacun, créer des situations qui font s'affronter les gens — puis nier toute responsabilité.",
    effet: "Les liens autour de soi se tendent, et on se retrouve isolé·e sans bien comprendre pourquoi.",
    exemple: "« Ta sœur a dit que tu exagérais, mais surtout ne lui répète pas. »"
  },
  { cat: "Contrôle de la relation et de l'environnement", mot: "Harcèlement", icon: Repeat2, analyse: true,
    court: "Répéter jusqu'à l'épuisement.",
    def: "Répétition de messages, de demandes, de reproches ou de surveillance. C'est le nombre et l'insistance — plus que chaque acte pris isolément — qui font la gravité.",
    effet: "On cède par fatigue, et chaque fait pris seul paraît « pas si grave » quand on essaie de le raconter.",
    exemple: "Trente messages en une soirée parce qu'on n'a pas répondu tout de suite."
  },
  { cat: "Contrôle de la relation et de l'environnement", mot: "Double visage", icon: EyeOff, analyse: false,
    court: "Charmant dehors, dur en privé.",
    def: "Montrer à l'extérieur un visage aimable et apprécié, et réserver l'hostilité à l'intimité. Le contraste peut aussi alterner dans la relation : très doux juste après avoir été très dur.",
    effet: "Personne ne croit ce qu'on raconte, et on finit par douter de sa propre perception.",
    exemple: "Adorable devant les amis toute la soirée, glacial dès que la porte se referme."
  },
  { cat: "Contrôle de la relation et de l'environnement", mot: "Flagrant délit", icon: Target, analyse: false,
    court: "Pousser à la faute pour pouvoir accuser.",
    def: "Provoquer une réaction — une colère, un mensonge, un écart — puis la brandir comme preuve : « tu vois bien que le problème, c'est toi ».",
    effet: "On se sent coupable de sa propre réaction, et on oublie ce qui l'a déclenchée.",
    exemple: "Provoquer jusqu'à l'explosion, puis filmer la colère pour la montrer aux autres."
  },
  { cat: "Contrôle de la relation et de l'environnement", mot: "Instrumentalisation d'un tiers", icon: Users, analyse: true,
    court: "Faire porter la pression par quelqu'un d'autre.",
    def: "L'instrumentalisation d'un tiers consiste à utiliser une autre personne — un enfant, un proche, un collègue, parfois une institution — comme messager forcé d'une pression, d'une menace ou d'une information, plutôt que de l'exprimer soi-même directement.",
    effet: "On se retrouve à devoir gérer un conflit par personne interposée, sans pouvoir répondre directement à qui en est réellement à l'origine.",
    exemple: "Faire dire à l'enfant « papa a dit que si tu ne réponds pas ce soir, il ne viendra pas te chercher »."
  },
  { cat: "Contrôle de la relation et de l'environnement", mot: "Surveillance / monitoring", icon: Eye, analyse: true,
    court: "Surveiller en continu les faits et gestes.",
    def: "La surveillance consiste à suivre de façon systématique les déplacements, les messages, les fréquentations ou les horaires d'une personne, souvent au nom de l'inquiétude ou de l'amour.",
    effet: "On se sent observé·e en permanence, ce qui pousse à s'autocensurer avant même qu'une remarque soit faite.",
    exemple: "« Envoie-moi ta position toutes les heures, comme ça je suis rassuré·e. »"
  },
  { cat: "Contrôle de la relation et de l'environnement", mot: "Contrôle économique", icon: Lock, analyse: false,
    court: "Restreindre l'accès à l'argent.",
    def: "Le contrôle économique consiste à limiter ou surveiller l'accès d'une personne à ses propres ressources financières — carte, salaire, comptes — pour restreindre son autonomie et sa capacité à partir.",
    effet: "On dépend financièrement de l'autre pour les besoins de base, ce qui rend un départ concrètement plus difficile.",
    exemple: "« C'est moi qui gère l'argent du foyer, tu n'as pas besoin de ta propre carte. »"
  },
  { cat: "Contrôle de la relation et de l'environnement", mot: "Contrôle de l'information", icon: EyeOff, analyse: false,
    court: "Filtrer ou monopoliser ce que l'autre sait.",
    def: "Le contrôle de l'information consiste à cacher, filtrer ou monopoliser volontairement certaines informations utiles (démarches, argent, droits, contacts) pour limiter les décisions possibles de l'autre.",
    effet: "On prend des décisions sans disposer de tous les éléments, ce qui restreint concrètement les options réelles.",
    exemple: "Ne jamais laisser l'autre voir les courriers, les relevés de compte ou les papiers administratifs du foyer."
  },
  { cat: "Contrôle de la relation et de l'environnement", mot: "Gatekeeping relationnel", icon: UserMinus, analyse: false,
    court: "Décider qui peut voir qui, et quand.",
    def: "Le gatekeeping relationnel consiste à contrôler l'accès d'une personne à son propre entourage — décider qui elle peut voir, quand, et dans quelles conditions — au lieu de la laisser choisir librement.",
    effet: "Le cercle de relations se rétrécit peu à peu, sans que cela ressemble à un interdit direct.",
    exemple: "« Tu peux voir ta copine, mais seulement si je suis là aussi. »"
  },
  { cat: "Contrôle de la relation et de l'environnement", mot: "Privation / perturbation volontaire du sommeil", icon: Moon, analyse: false,
    court: "Empêcher volontairement de dormir ou de se reposer.",
    def: "Réveiller, retenir ou empêcher volontairement quelqu'un de dormir suffisamment — par des disputes tardives, des appels nocturnes ou des exigences répétées — pour l'épuiser et diminuer sa capacité à résister ou à réfléchir clairement.",
    effet: "L'épuisement s'accumule et rend plus difficile de prendre du recul ou de se défendre.",
    exemple: "Déclencher systématiquement les disputes importantes tard le soir, ou réveiller plusieurs fois dans la nuit « pour parler »."
  },
  { cat: "Contrôle de la relation et de l'environnement", mot: "Punition imprévisible", icon: Repeat2, analyse: false,
    court: "La même chose acceptée un jour, punie le lendemain.",
    def: "La punition imprévisible consiste à sanctionner un jour ce qui était toléré, voire encouragé, la veille — sans logique visible — ce qui empêche de savoir à l'avance ce qui est vraiment permis.",
    effet: "On reste en alerte permanente, incapable d'anticiper ce qui va déclencher une réaction, ce qui épuise et augmente la vigilance.",
    exemple: "Rentrer à 19h ne pose aucun problème le lundi, mais déclenche une scène de jalousie le jeudi, pour le même horaire."
  },
  { cat: "Contrôle de la relation et de l'environnement", mot: "Test de limites", icon: Target, analyse: false,
    court: "Petites transgressions pour observer jusqu'où ça passe.",
    def: "Le test de limites consiste à commettre de petites transgressions successives, en observant si l'autre réagit ou accepte, avant d'aller plus loin. Chaque silence ou chaque « ce n'est pas grave » ouvre la voie à la transgression suivante.",
    effet: "On ne voit pas le moment précis où la limite a été franchie, parce que chaque étape prise seule paraissait mineure.",
    exemple: "Emprunter une fois sans demander, voir qu'il n'y a pas de réaction, puis recommencer de plus en plus souvent."
  },
  { cat: "Contrôle de la relation et de l'environnement", mot: "Escalade graduelle des exigences", icon: Clock, analyse: false,
    court: "Des demandes de plus en plus importantes.",
    def: "L'escalade graduelle des exigences augmente peu à peu ce qui est demandé ou imposé, à un rythme assez lent pour que chaque nouvelle exigence, prise isolément, ne semble jamais être « la fois de trop ».",
    effet: "On se retrouve à accepter des choses qu'on aurait clairement refusées si elles avaient été demandées dès le départ, d'un coup.",
    exemple: "D'abord un mot de passe partagé « pour plus de simplicité », puis l'accès à tous les comptes, puis la validation de chaque sortie."
  },

  // ---- Manipulation du discours et du raisonnement ----
  { cat: "Manipulation du discours et du raisonnement", mot: "Présupposé", icon: HelpCircle, analyse: true,
    court: "Glisser une accusation cachée.",
    def: "Le présupposé insère une affirmation non prouvée dans la formulation, comme si elle était déjà admise, ce qui rend difficile de la contester.",
    effet: "On se retrouve à devoir se défendre d'une accusation jamais posée clairement.",
    exemple: "« Depuis que tu es devenue agressive, on ne peut plus rien te dire. »"
  },
  { cat: "Manipulation du discours et du raisonnement", mot: "Recadrage", icon: RefreshCw, analyse: true,
    court: "Redéfinir la réalité à son avantage.",
    def: "Le recadrage réécrit le sens d'un événement pour effacer la responsabilité de son auteur (« ce n'était pas méchant, c'était de l'humour »).",
    effet: "On finit par douter de sa propre lecture des faits.",
    exemple: "« Ce n'était pas une insulte, c'était une blague, tu ne comprends rien. »"
  },
  { cat: "Manipulation du discours et du raisonnement", mot: "Généralisation", icon: Repeat, analyse: true,
    court: "« Toujours », « jamais ».",
    def: "La généralisation exagère un comportement ponctuel en le présentant comme systématique (« tu fais toujours… », « tu ne fais jamais… »).",
    effet: "On se sent enfermé·e dans un défaut et jugé·e sur l'ensemble plutôt que sur un fait précis.",
    exemple: "« Tu fais toujours tout de travers. »"
  },
  { cat: "Manipulation du discours et du raisonnement", mot: "Injonction paradoxale", icon: ArrowLeftRight, analyse: true,
    court: "Donner deux consignes incompatibles.",
    def: "L'injonction paradoxale enferme dans une situation où, quoi qu'on fasse, c'est perdant : des demandes contradictoires sont posées en même temps, c'est donc impossible de nourrir les différentes demandes de l'autre.",
    effet: "On se sent piégé, confus, et fautif quelle que soit la réponse choisie.",
    exemple: "« Sois plus spontané·e — mais ne fais jamais rien sans me demander. »"
  },
  { cat: "Manipulation du discours et du raisonnement", mot: "Double contrainte", icon: ArrowLeftRight, analyse: true,
    court: "Quoi que tu fasses, tu as tort.",
    def: "La double contrainte (le « double lien ») enferme dans deux options qui mènent toutes deux à un reproche : il n'existe aucune « bonne » réponse possible, et quelle que soit la chose faite, on reproche celle qui n'a pas été faite.",
    effet: "On se sent paralysé·e et coupable quel que soit son choix.",
    exemple: "« Si tu pars, tu m'abandonnes ; si tu restes, tu m'étouffes. »"
  },
  { cat: "Manipulation du discours et du raisonnement", mot: "Passif-agressif", icon: MessageSquare, analyse: true,
    court: "Une agressivité déguisée.",
    def: "Le comportement passif-agressif exprime l'hostilité de façon indirecte : sous-entendus, silences, reproches déguisés, ironie.",
    effet: "On ressent une tension réelle sans pouvoir la nommer, ce qui rend le dialogue difficile.",
    exemple: "« Non non, tout va bien… fais comme tu veux, comme d'habitude. »"
  },
  { cat: "Manipulation du discours et du raisonnement", mot: "Ordre flou", icon: HelpCircle, analyse: true,
    court: "Demander sans dire quoi.",
    def: "Donner une consigne volontairement vague, puis reprocher le résultat quel qu'il soit — puisque rien n'a jamais été précisé.",
    effet: "On s'épuise à deviner, et on se sent stupide de ne pas avoir compris.",
    exemple: "« Tu sais très bien ce que tu as à faire. »"
  },
  { cat: "Manipulation du discours et du raisonnement", mot: "Reproche ambigu", icon: Layers, analyse: true,
    court: "Être accusé·e sans savoir de quoi.",
    def: "Un reproche appuyé mais incompréhensible, qu'on ne peut ni réfuter ni réparer parce qu'il n'est jamais formulé clairement.",
    effet: "On tourne en boucle à chercher sa faute, et on offre des compensations pour faire cesser le malaise.",
    exemple: "« Tu sais très bien ce que tu as fait. »"
  },
  { cat: "Manipulation du discours et du raisonnement", mot: "Nuage d'encre", icon: Layers, analyse: true,
    court: "Noyer la question au lieu d'y répondre.",
    def: "Face à une question gênante, répondre par un flot de mots, de termes savants, de demi-vérités ou d'agacement, jusqu'à ce que la question disparaisse d'elle-même.",
    effet: "On renonce à demander, en se disant qu'on n'a rien compris.",
    exemple: "« C'est beaucoup plus compliqué que ça, tu ne peux pas comprendre. »"
  },
  { cat: "Manipulation du discours et du raisonnement", mot: "Caricature", icon: Quote, analyse: true,
    court: "Déformer tes propos pour les rendre absurdes.",
    def: "Reformuler ce que l'autre a dit en le grossissant ou en le sortant de son contexte, souvent avec une image ou une comparaison, pour le rendre ridicule.",
    effet: "On n'ose plus s'exprimer, de peur que ses mots soient retournés.",
    exemple: "« Donc selon toi je suis un monstre, c'est ça ? »"
  },
  { cat: "Manipulation du discours et du raisonnement", mot: "Plus c'est gros, plus ça passe", icon: Zap, analyse: true,
    court: "Affirmer l'énorme avec aplomb.",
    def: "Asséner une contrevérité évidente avec une assurance totale. C'est la conviction affichée, pas la solidité des faits, qui emporte l'adhésion.",
    effet: "On doute de soi devant tant d'assurance, et on finit par se taire.",
    exemple: "« Je n'ai jamais élevé la voix de ma vie, demande à n'importe qui. »"
  },
  { cat: "Manipulation du discours et du raisonnement", mot: "Pétition de principe", icon: Scale, analyse: true,
    court: "Afficher des valeurs qu'on n'applique pas.",
    def: "Énoncer avec conviction de grands principes — honnêteté, respect, loyauté — sans intention de s'y tenir, pour rassurer l'autre et gagner du temps.",
    effet: "On accorde sa confiance à des mots, puis on se reproche de ne pas avoir vu venir.",
    exemple: "« Chez moi, la franchise passe avant tout. »"
  },
  { cat: "Manipulation du discours et du raisonnement", mot: "Ambiguïté / flou", icon: Layers, analyse: true,
    court: "Rester vague pour pouvoir tout nier ensuite.",
    def: "L'ambiguïté consiste à rester volontairement flou dans ses propos, pour pouvoir ensuite nier ce qu'on a dit ou changer de version selon ce qui arrange.",
    effet: "On ne sait jamais vraiment sur quoi on s'est mis d'accord, et on ne peut rien prouver après coup.",
    exemple: "« Je n'ai jamais dit ça… enfin, pas exactement. »"
  },
  { cat: "Manipulation du discours et du raisonnement", mot: "Fausse question / question orientée", icon: HelpCircle, analyse: true,
    court: "Imposer une réponse par la façon de poser la question.",
    def: "La fausse question ne cherche pas vraiment une réponse : la façon dont elle est posée impose déjà ce qu'on est censé répondre.",
    effet: "On se retrouve à se justifier ou à renoncer, sans avoir eu de vraie place pour répondre librement.",
    exemple: "« Tu ne vas quand même pas encore sortir avec tes amies ? »"
  },
  { cat: "Manipulation du discours et du raisonnement", mot: "Fausse équivalence", icon: Scale, analyse: true,
    court: "Mettre sur le même plan deux choses très différentes.",
    def: "La fausse équivalence consiste à présenter deux comportements ou deux situations comme comparables, alors que leur nature ou leur gravité sont en réalité très différentes.",
    effet: "On finit par relativiser un fait grave, noyé dans une comparaison qui n'a pas lieu d'être.",
    exemple: "« Toi tu as oublié d'acheter du pain, moi j'ai juste crié un peu fort — on fait tous des erreurs. »"
  },
  { cat: "Manipulation du discours et du raisonnement", mot: "Whataboutism", icon: ArrowLeftRight, analyse: true,
    court: "Répondre à une accusation en accusant en retour.",
    def: "Le whataboutism consiste à répondre à un reproche non pas en s'en expliquant, mais en déplaçant immédiatement l'attention sur les torts supposés de la personne qui accuse.",
    effet: "Le sujet initial n'est jamais traité, et c'est celui ou celle qui a soulevé le problème qui se retrouve à devoir se justifier.",
    exemple: "« Tu me reproches d'avoir crié ? Et toi, la fois où tu es rentrée à 2h sans prévenir, on en parle ? »"
  },
  { cat: "Manipulation du discours et du raisonnement", mot: "Déplacement des poteaux / Moving the goalposts", icon: Repeat, analyse: false,
    court: "L'exigence change dès qu'elle est remplie.",
    def: "Déplacer les poteaux consiste à changer discrètement le critère de réussite dès qu'il vient d'être atteint, si bien qu'il devient impossible de vraiment satisfaire l'autre ou de mettre fin au reproche.",
    effet: "On a le sentiment de ne jamais pouvoir « en faire assez », quels que soient les efforts fournis.",
    exemple: "« Tu as arrêté de sortir le soir, très bien — maintenant il faudrait aussi que tu me montres tous tes messages. »"
  },

  // ---- Altération de la réalité et de la responsabilité ----
  { cat: "Altération de la réalité et de la responsabilité", mot: "Gaslighting", icon: Brain, analyse: true,
    court: "Faire douter de sa propre perception.",
    def: "Le gaslighting consiste à amener une personne à douter de sa mémoire, de son ressenti ou de sa perception des faits. Les phrases typiques nient une réalité pourtant vécue.",
    effet: "Avec le temps, on peut finir par ne plus se fier à son propre jugement et chercher constamment une validation extérieure.",
    exemple: "« Tu exagères, je n'ai jamais dit ça — tu te fais des films. »"
  },
  { cat: "Altération de la réalité et de la responsabilité", mot: "Mensonge & déni", icon: EyeOff, analyse: false,
    court: "Nier l'évidence.",
    def: "Le déni nie des faits pourtant établis, parfois avec aplomb, pour réécrire la réalité partagée — c'est la falsification : masquer ou déformer une partie de la réalité pour la rendre plus flatteuse, au point, souvent, d'y croire soi-même.",
    effet: "On doute de ce qu'on a vu ou entendu, et la confiance dans l'échange s'érode.",
    exemple: "« Je n'ai jamais promis ça, tu confonds. »"
  },
  { cat: "Altération de la réalité et de la responsabilité", mot: "Minimisation", icon: Shrink, analyse: true,
    court: "Réduire la portée de ses actes.",
    def: "La minimisation consiste à présenter un comportement blessant comme anodin, exagéré par l'autre, ou sans importance.",
    effet: "On finit par taire ce qu'on ressent, croyant réagir de façon disproportionnée.",
    exemple: "« C'était une blague, tu prends tout au sérieux. »"
  },
  { cat: "Altération de la réalité et de la responsabilité", mot: "Renversement de responsabilité", icon: Repeat, analyse: true,
    court: "Retourner la faute vers vous.",
    def: "Le renversement de responsabilité consiste à vous attribuer la cause de ses propres comportements ou émotions, pour que vous vous sentiez coupable à sa place — en démontrant que c'est vous qui avez fauté, ou que la faute a été commise à cause de vous.",
    effet: "On finit par s'excuser et porter un poids qui ne nous revient pas.",
    exemple: "« Si je m'énerve, c'est parce que tu me pousses à bout. »"
  },
  { cat: "Altération de la réalité et de la responsabilité", mot: "Projection", icon: Repeat, analyse: false,
    court: "Attribuer à l'autre ses propres torts.",
    def: "La projection consiste à reprocher à l'autre exactement ce que l'on fait soi-même, renversant les rôles. C'est le plus souvent inconscient : la personne n'y voit pas un jeu, elle attribue vraiment à l'autre ce qu'elle ne peut pas reconnaître en elle — l'effet sur qui le reçoit reste le même.",
    effet: "On finit par se défendre d'accusations qui décrivent en réalité le comportement de l'autre.",
    exemple: "« C'est toi qui es jaloux et contrôlant. » (de la part de celui qui contrôle)"
  },
  { cat: "Altération de la réalité et de la responsabilité", mot: "Confusion", icon: Layers, analyse: true,
    court: "Multiplier les versions pour désorienter.",
    def: "La confusion accumule contradictions, demi-vérités et changements de version pour empêcher de penser clairement et de se positionner.",
    effet: "On ne sait plus quoi croire, on perd ses repères et sa capacité à décider.",
    exemple: "« Je n'ai jamais dit ça… enfin si, mais pas comme ça, et de toute façon c'est toi qui as commencé. »"
  },
  { cat: "Altération de la réalité et de la responsabilité", mot: "Normalisation progressive", icon: ArrowDown, analyse: true,
    court: "S'habituer peu à peu à l'inacceptable.",
    def: "La normalisation progressive fait accepter, petit à petit, des comportements qu'on aurait refusés au début. Le seuil de ce qui est « tolérable » se déplace sans qu'on le voie.",
    effet: "Des faits graves finissent par paraître ordinaires.",
    exemple: "Les insultes, d'abord choquantes, deviennent « juste sa façon de parler »."
  },
  { cat: "Altération de la réalité et de la responsabilité", mot: "DARVO", icon: ArrowLeftRight, analyse: false,
    court: "Nier, attaquer, inverser les rôles.",
    def: "DARVO décrit une réaction face à une mise en cause : Nier les faits, Attaquer la personne qui les soulève, et Renverser les rôles victime/responsable.",
    effet: "On se retrouve à se défendre et à culpabiliser, alors qu'on signalait un tort subi.",
    exemple: "« Ça n'est jamais arrivé, tu es manipulateur, et en plus tu me fais du mal. »"
  },
  { cat: "Altération de la réalité et de la responsabilité", mot: "Poubelle psychique", icon: ArrowDown, analyse: true,
    court: "Tout ce qui va mal, c'est toi.",
    def: "Une répartition systématique : les réussites reviennent à l'un, les erreurs, les échecs et les torts sont attribués à l'autre.",
    effet: "On porte la responsabilité de tout, y compris de ce qu'on n'a pas fait.",
    exemple: "« Si le dossier a raté, c'est parce que tu m'as déconcentré. »"
  },
  { cat: "Altération de la réalité et de la responsabilité", mot: "Savoir mieux que toi", icon: Brain, analyse: true,
    court: "Décréter ce que tu penses et ressens.",
    def: "Affirmer connaître les pensées, les intentions ou les émotions de l'autre mieux que lui-même, et le présenter comme une évidence.",
    effet: "On ne sait plus faire confiance à son propre ressenti, et l'échange devient impossible.",
    exemple: "« Tu dis ça, mais au fond tu sais très bien que tu m'en veux. »"
  },
  { cat: "Altération de la réalité et de la responsabilité", mot: "Réécriture du passé", icon: RefreshCw, analyse: true,
    court: "Modifier l'histoire commune pour faire douter.",
    def: "La réécriture du passé consiste à modifier ou nier des événements qui se sont réellement passés, pour que l'autre doute de sa mémoire ou accepte une autre version des faits.",
    effet: "On finit par ne plus faire confiance à ses propres souvenirs.",
    exemple: "« On n'a jamais été d'accord là-dessus, tu te souviens mal. »"
  },

  // ---- Dévalorisation et atteinte à l'identité ----
  { cat: "Dévalorisation et atteinte à l'identité", mot: "Dévalorisation", icon: ArrowDown, analyse: true,
    court: "Attaquer l'estime de soi.",
    def: "La dévalorisation rabaisse une personne par des critiques répétées, des moqueries ou des comparaisons défavorables.",
    effet: "À force, on peut douter de soi, de sa valeur et de sa légitimité à exister tel qu'on est.",
    exemple: "« De toute façon, tu es incapable de comprendre. »"
  },
  { cat: "Dévalorisation et atteinte à l'identité", mot: "Étiquetage", icon: TagIcon, analyse: true,
    court: "Décréter qui tu es, pas ce que tu fais.",
    def: "L'étiquetage consiste à coller une définition négative sur ta personne même (« tu es… »), et non sur un comportement. Sous emprise, à force de l'entendre, on finit par le croire et se définir soi-même par ce que l'autre a décidé.",
    effet: "L'image de soi se déforme peu à peu pour épouser l'étiquette imposée.",
    exemple: "« De toute façon, toi, t'es quelqu'un qui ment. »"
  },
  { cat: "Dévalorisation et atteinte à l'identité", mot: "Humiliation", icon: TrendingDown, analyse: false,
    court: "Rabaisser, souvent en public.",
    def: "L'humiliation cherche à rabaisser une personne, fréquemment devant d'autres (voir « Utilisation d'un public »), pour l'atteindre dans sa dignité.",
    effet: "On se sent petit·e, exposé·e, et on n'ose plus prendre sa place.",
    exemple: "« Regarde-toi, tu es ridicule devant tout le monde. »"
  },
  { cat: "Dévalorisation et atteinte à l'identité", mot: "Sarcasme / mépris", icon: Quote, analyse: false,
    court: "Attaquer sous couvert d'ironie.",
    def: "Le sarcasme déguise une attaque en trait d'humour, ce qui permet de blesser tout en niant l'intention (« c'était pour rire »).",
    effet: "On encaisse la pique sans pouvoir vraiment répondre, sous peine de « ne pas avoir d'humour ».",
    exemple: "« Bravo, encore une idée de génie de ta part… »"
  },
  { cat: "Dévalorisation et atteinte à l'identité", mot: "Attaque par surprise", icon: AlertTriangle, analyse: false,
    court: "Frapper au moment où tu ne t'y attends pas.",
    def: "Lancer un reproche ou une accusation dans un moment de détente, de fête ou de fatigue, quand la garde est baissée.",
    effet: "L'effet est décuplé : on est pris·e de court, sans réponse — et le souvenir du moment est gâché.",
    exemple: "Une accusation lâchée en plein repas d'anniversaire."
  },
  { cat: "Dévalorisation et atteinte à l'identité", mot: "Utilisation d'un public", icon: Users, analyse: false,
    court: "Attaquer devant témoins.",
    def: "Choisir la présence d'autres personnes pour rabaisser, révéler un secret ou faire un reproche. La présence de témoins empêche de répondre.",
    effet: "La honte est plus forte, et se défendre reviendrait à s'exposer encore davantage.",
    exemple: "Raconter un détail intime à table, « pour rire »."
  },
  { cat: "Dévalorisation et atteinte à l'identité", mot: "Écoute aversive", icon: VolumeX, analyse: false,
    court: "Écouter en montrant que ça n'intéresse pas.",
    def: "Manifester ostensiblement sa distraction pendant que l'autre parle : téléphone, soupirs, regard ailleurs, réponses à côté.",
    effet: "On se sent inintéressant·e, on abrège — et le sujet n'a jamais à être traité.",
    exemple: "Faire défiler son écran en répondant « oui oui » pendant qu'elle raconte sa journée."
  },
  { cat: "Dévalorisation et atteinte à l'identité", mot: "Déni de l'autre", icon: EyeOff, analyse: false,
    court: "Faire comme si tu n'existais pas.",
    def: "Ignorer la présence, les demandes ou les besoins de l'autre — non par une attaque, mais par une absence de réaction.",
    effet: "Difficile à nommer et à reprocher, cela atteint le sentiment même d'exister pour l'autre.",
    exemple: "Ne pas répondre, ne pas regarder, poursuivre comme si personne n'avait parlé."
  },
  { cat: "Dévalorisation et atteinte à l'identité", mot: "Maladresse volontaire", icon: ThumbsUp, analyse: false,
    court: "Blesser en faisant mine de ne pas l'avoir voulu.",
    def: "Un mot ou un geste qui atteint précisément là où ça fait mal, aussitôt couvert par « je ne l'ai pas fait exprès ».",
    effet: "On encaisse sans pouvoir protester, sous peine de passer pour susceptible.",
    exemple: "Casser « par accident » l'objet auquel elle tenait le plus."
  },

  // ---- Pouvoir, domination et emprise ----
  { cat: "Pouvoir, domination et emprise", mot: "Contrôle coercitif", icon: Lock, analyse: false,
    court: "Un système de domination quotidien.",
    def: "Le contrôle coercitif est un ensemble de comportements (surveillance, règles, menaces, contrôle de l'argent) qui restreignent durablement la liberté d'une personne.",
    effet: "La vie quotidienne se réorganise autour des exigences de l'autre, par peur des conséquences.",
    exemple: "Devoir justifier chaque dépense, chaque sortie, chaque message."
  },
  { cat: "Pouvoir, domination et emprise", mot: "Contrôle / Intrusion", icon: Eye, analyse: true,
    court: "Surveiller ou envahir l'espace personnel.",
    def: "Le contrôle cherche à surveiller, limiter ou diriger les faits et gestes d'une personne. Cela peut toucher l'espace physique (entrer sans prévenir), l'espace intime (fouiller un sac, un téléphone, un journal), l'espace relationnel (s'immiscer dans une conversation ou une amitié), et jusqu'au regard (imposer de voir, ou forcer à montrer).",
    effet: "On perd en autonomie et en liberté de mouvement, parfois sans s'en rendre compte au début.",
    exemple: "« Montre-moi ton téléphone, je veux savoir à qui tu parles. »"
  },
  { cat: "Pouvoir, domination et emprise", mot: "Abus de pouvoir", icon: Crown, analyse: true,
    court: "Se servir d'une position pour contraindre.",
    def: "Utiliser une position — hiérarchique, familiale, financière, statutaire — au-delà de ce qu'elle permet, pour contrôler, contrarier ou soumettre.",
    effet: "Refuser paraît risqué, alors on cède — et on doute de son droit à protester.",
    exemple: "« Ici, c'est moi qui décide de tes horaires. Et de qui tu vois le week-end. »"
  },
  { cat: "Pouvoir, domination et emprise", mot: "Droits spéciaux", icon: Crown, analyse: true,
    court: "Se croire au-dessus des règles communes.",
    def: "Considérer comme évident d'avoir droit à mieux, plus vite, sans attendre — et faire un scandale quand ce n'est pas le cas.",
    effet: "L'entourage cède pour éviter l'esclandre, ce qui confirme la croyance et la renforce.",
    exemple: "« Je n'ai pas à attendre comme tout le monde. »"
  },
  { cat: "Pouvoir, domination et emprise", mot: "Redéfinition des rôles", icon: Repeat, analyse: false,
    court: "S'attribuer le travail des autres.",
    def: "Laisser croire qu'on a fait plus qu'on n'a réellement fait, et s'attribuer un rôle ou des mérites qui reviennent à quelqu'un d'autre.",
    effet: "On voit ses efforts effacés, sans pouvoir le dire sans passer pour mesquin·e.",
    exemple: "« Heureusement que j'étais là pour tout organiser. » — alors qu'elle a tout fait."
  },
  { cat: "Pouvoir, domination et emprise", mot: "Imposture", icon: User, analyse: false,
    court: "Se faire passer pour plus qu'on n'est.",
    def: "Embellir son parcours, ses réussites ou ses relations, et s'approprier le prestige des autres pour soutenir une image flatteuse de soi.",
    effet: "On doute de sa propre lecture, parce que l'assurance affichée est convaincante.",
    exemple: "« J'ai monté cette boîte tout seul. » — alors que le travail était collectif."
  },
  { cat: "Pouvoir, domination et emprise", mot: "Sabotage", icon: TrendingDown, analyse: false,
    court: "Dire oui, puis faire échouer.",
    def: "Donner son accord à un projet, puis en empêcher discrètement la réalisation — oublis, retards, obstacles — avant de reprocher l'échec à l'autre.",
    effet: "On se croit responsable d'un échec qu'on n'a pas causé.",
    exemple: "Accepter la sortie, puis tout faire traîner jusqu'à ce qu'elle soit annulée."
  },
  { cat: "Pouvoir, domination et emprise", mot: "Vol du territoire", icon: Link2, analyse: false,
    court: "S'approprier ce qui est à toi.",
    def: "S'installer dans l'espace de l'autre comme s'il était le sien : ses affaires, son logement, ses amis, ses idées, ses réussites.",
    effet: "On perd ses repères et le sentiment d'avoir un espace bien à soi.",
    exemple: "Raconter comme siennes les idées ou les réussites de l'autre."
  },
  { cat: "Pouvoir, domination et emprise", mot: "Pression sexuelle", icon: AlertTriangle, analyse: false,
    court: "Insister jusqu'à ce que l'autre cède.",
    def: "Solliciter de façon répétée un rapport ou une pratique dont l'autre ne veut pas, en s'appuyant sur la culpabilité, la bouderie, le chantage ou l'insistance. Céder par épuisement n'est pas consentir.",
    effet: "On finit par accepter pour avoir la paix, avec un sentiment de honte difficile à nommer.",
    exemple: "« Si tu m'aimais vraiment, tu ne me refuserais pas ça. »",
    repere: "Un rapport obtenu par contrainte, menace, violence ou surprise est une infraction, y compris au sein d'un couple. Le 3919 informe et oriente, gratuitement et anonymement.",
  },
  { cat: "Pouvoir, domination et emprise", mot: "Rivalité avec l'enfant", icon: Users, analyse: false,
    court: "Un parent qui entre en compétition.",
    def: "Un parent jaloux de la jeunesse, de la beauté ou des réussites de son enfant cherche à le rabaisser ou à l'empêcher d'avancer, au lieu de le soutenir.",
    effet: "L'enfant apprend à se faire petit pour ne pas déclencher l'hostilité, et doute longtemps de sa valeur.",
    exemple: "« Tu te crois meilleure que moi ? On verra bien ce que tu vaux. »"
  },
  { cat: "Pouvoir, domination et emprise", mot: "Climat incestuel", icon: EyeOff, analyse: false,
    court: "Une ambiance sexualisée, sans passage à l'acte.",
    def: "Sans geste sexuel, une ambiance de propos, de regards ou d'attitudes teintés de sexualité entre un adulte et un enfant efface la frontière entre les générations.",
    effet: "L'enfant met souvent des années à comprendre que ce climat n'était pas normal, faute de fait précis à montrer.",
    exemple: "Des commentaires réguliers sur le corps de l'adolescente, « pour rire »."
  },
  { cat: "Pouvoir, domination et emprise", mot: "Séduction narcissique", icon: Sparkles, analyse: false,
    court: "Idéaliser, puis dévaloriser.",
    def: "La séduction narcissique capte l'autre par une phase d'idéalisation intense au début de la relation, avant de basculer vers la dévalorisation. C'est une grille de lecture générale utilisée par le Coach, pas un diagnostic à poser sur quelqu'un.",
    effet: "On garde l'espoir de retrouver la personne idéalisée du début, ce qui retient dans la relation.",
    exemple: "Être mis·e sur un piédestal les premiers mois, puis systématiquement rabaissé·e ensuite."
  },

  // ---- Techniques d'influence et d'engagement ----
  { cat: "Techniques d'influence et d'engagement", mot: "Porte-au-nez", icon: DoorOpen, analyse: false,
    court: "Grosse demande, puis une plus petite.",
    def: "La technique de la porte-au-nez consiste à formuler une demande énorme (vouée au refus), pour qu'ensuite une demande plus petite paraisse raisonnable, presque un soulagement.",
    effet: "On accepte la seconde demande par contraste, sans la remettre en question.",
    exemple: "« Tu ne veux pas emménager ? Bon, alors laisse-moi au moins une clé de chez toi. »"
  },
  { cat: "Techniques d'influence et d'engagement", mot: "Amorçage", icon: RefreshCw, analyse: false,
    court: "Changer les règles après l'accord.",
    def: "L'amorçage (low-ball) consiste à obtenir un accord sur des conditions attirantes, puis à en changer les termes une fois l'engagement pris.",
    effet: "On se sent tenu·e par l'accord initial et on accepte des conditions qu'on aurait refusées d'emblée.",
    exemple: "« Tu avais dit oui pour ce week-end… en fait ce sera toute la semaine chez mes parents. »"
  },
  { cat: "Techniques d'influence et d'engagement", mot: "Pied dans la porte", icon: DoorOpen, analyse: false,
    court: "Commencer petit pour obtenir grand.",
    def: "La technique du pied dans la porte consiste à obtenir d'abord un accord facile sur une toute petite demande, pour ensuite en demander une plus grande — qu'on aurait refusée si elle avait été posée en premier.",
    effet: "On se sent engagé·e par ce qu'on a déjà accepté, et refuser la suite paraît incohérent.",
    exemple: "« On regarde juste un appart ensemble, pour voir » — puis la signature du bail arrive vite."
  },
  { cat: "Techniques d'influence et d'engagement", mot: "Réciprocité", icon: RefreshCw, analyse: false,
    court: "Se sentir obligé·e de rendre.",
    def: "Le principe de réciprocité fait qu'on se sent redevable après avoir reçu un cadeau, une faveur ou une confidence — même non sollicités.",
    effet: "On dit oui par obligation ressentie plutôt que par choix.",
    exemple: "« Je t'ai payé le restaurant, tu peux bien me rendre ce service. »"
  },
  { cat: "Techniques d'influence et d'engagement", mot: "Preuve sociale", icon: Users, analyse: false,
    court: "Suivre ce que fait la majorité.",
    def: "La preuve sociale pousse à s'aligner sur ce que « tout le monde » ferait ou penserait, surtout dans le doute.",
    effet: "On doute de son propre ressenti face à une prétendue majorité.",
    exemple: "« Tout le monde trouve que tu exagères. »"
  },
  { cat: "Techniques d'influence et d'engagement", mot: "Autorité", icon: Crown, analyse: false,
    court: "Obéir à une figure de pouvoir.",
    def: "Le principe d'autorité fait céder plus facilement face à quelqu'un qui affiche expertise, statut ou position de pouvoir, réels ou prétendus.",
    effet: "On s'incline sans vérifier, par respect ou crainte de l'autorité.",
    exemple: "« Je suis ton père, tu me dois le respect quoi qu'il arrive. »"
  },
  { cat: "Techniques d'influence et d'engagement", mot: "Rareté / peur de perdre", icon: Hourglass, analyse: false,
    court: "Créer l'urgence de ne pas rater.",
    def: "La rareté donne de la valeur à ce qui est présenté comme rare ou sur le point de disparaître, et active la peur de perdre.",
    effet: "On agit dans la précipitation pour ne pas « rater sa chance ».",
    exemple: "« C'est ta dernière chance, après je m'en vais pour de bon. »"
  },
  { cat: "Techniques d'influence et d'engagement", mot: "Sympathie", icon: Smile, analyse: false,
    court: "On dit oui à qui nous plaît.",
    def: "On accède plus facilement aux demandes des personnes qui nous plaisent, nous ressemblent ou nous complimentent.",
    effet: "Le lien de sympathie abaisse la vigilance.",
    exemple: "« On se ressemble tellement, toi et moi, tu vas bien me comprendre. »"
  },
  { cat: "Techniques d'influence et d'engagement", mot: "Principe de cohérence", icon: Check, analyse: false,
    court: "Vouloir rester fidèle à ce qu'on a déjà dit.",
    def: "Une fois qu'on a dit ou fait quelque chose, on cherche inconsciemment à rester cohérent avec ce premier engagement, même minime. C'est le ressort derrière la technique du « pied dans la porte » : un premier oui facile prépare le terrain pour un second, plus grand.",
    effet: "On se sent tenu·e par ses propres mots ou actes passés, et revenir en arrière paraît incohérent — presque malhonnête envers soi-même.",
    exemple: "« Tu avais dit que tu me faisais confiance, pourquoi tu changes d'avis maintenant ? »"
  },
  { cat: "Techniques d'influence et d'engagement", mot: "Unité / appartenance", icon: Users, analyse: false,
    court: "Le « nous » qui abaisse la vigilance.",
    def: "Se sentir membre d'un même groupe — un couple, une famille, un clan — pousse à accorder plus facilement sa confiance et à se montrer moins critique envers les siens.",
    effet: "On baisse sa garde parce que « c'est nous », et on juge moins sévèrement ce qu'on refuserait venant d'un·e inconnu·e.",
    exemple: "« On est une famille, entre nous ça ne sort pas, tu comprends. »"
  },
  { cat: "Techniques d'influence et d'engagement", mot: "Surcharge / urgence", icon: Hourglass, analyse: false,
    court: "Empêcher de réfléchir en pressant le temps.",
    def: "Créer un sentiment d'urgence ou saturer l'attention pour empêcher l'autre de prendre le temps de réfléchir avant de répondre ou de décider.",
    effet: "On répond dans la précipitation, sans avoir pu peser sa décision.",
    exemple: "« Décide tout de suite, je n'ai pas le temps d'attendre. »"
  },
  { cat: "Techniques d'influence et d'engagement", mot: "Influence informationnelle", icon: Eye, analyse: false,
    court: "Contrôler ce que l'autre sait.",
    def: "L'influence informationnelle consiste à contrôler ce que quelqu'un sait — par le cadrage, l'omission volontaire ou les demi-vérités — pour orienter sa vision d'une situation, sans mentir ouvertement.",
    effet: "On prend des décisions sur la base d'une image incomplète, sans le savoir.",
    exemple: "« Je ne t'ai pas menti, je ne t'ai juste pas tout dit. »"
  },
  { cat: "Techniques d'influence et d'engagement", mot: "Manipulation médiatique", icon: Repeat, analyse: false,
    court: "La répétition finit par sembler vraie.",
    def: "À grande échelle, répéter un message, choisir certains sujets plutôt que d'autres, ou toujours les présenter sous le même angle façonne l'opinion sans qu'on s'en rende compte.",
    effet: "Une idée répétée partout finit par sembler évidente, même sans preuve.",
    exemple: "Un même discours, répété sur plusieurs canaux, qui finit par ne plus être questionné."
  },
  { cat: "Techniques d'influence et d'engagement", mot: "Manipulation algorithmique", icon: Target, analyse: false,
    court: "Les recommandations orientent ce qu'on voit.",
    def: "Les algorithmes de recommandation et la personnalisation du contenu créent des bulles où l'on ne voit plus que ce qui confirme déjà ce qu'on pense.",
    effet: "On croit avoir une vue d'ensemble alors qu'on ne voit qu'une version filtrée de la réalité.",
    exemple: "Ne voir en ligne que des contenus qui confortent une seule vision d'une situation ou d'une personne."
  },
  { cat: "Techniques d'influence et d'engagement", mot: "Nudges", icon: Hand, analyse: false,
    court: "L'environnement pousse vers un choix, sans y forcer.",
    def: "Un nudge est un petit aménagement de l'environnement ou de la présentation des choix (ordre, mise en avant, option par défaut) qui pousse discrètement vers une décision, sans jamais l'imposer explicitement.",
    effet: "On croit avoir choisi librement, alors que la présentation orientait déjà la décision.",
    exemple: "Présenter une seule option en évidence pour qu'elle semble « le choix naturel »."
  },
  { cat: "Techniques d'influence et d'engagement", mot: "Ingénierie sociale", icon: Lock, analyse: false,
    court: "Exploiter la confiance pour obtenir une info ou une action.",
    def: "L'ingénierie sociale consiste à exploiter les réflexes humains — confiance, envie d'aider, peur de l'autorité, urgence — pour obtenir une information ou une action qu'on n'aurait pas donnée en y réfléchissant.",
    effet: "On agit vite, sous la pression du moment, avant d'avoir pu vérifier.",
    exemple: "« C'est ta banque, donne vite ton code, c'est urgent. »"
  },
  { cat: "Techniques d'influence et d'engagement", mot: "Fausse urgence", icon: Hourglass, analyse: false,
    court: "Créer artificiellement une contrainte de temps.",
    def: "La fausse urgence consiste à inventer ou exagérer une contrainte de temps pour empêcher toute réflexion posée avant de répondre ou de décider. Elle se combine souvent avec la rareté et la peur de perdre.",
    effet: "On répond dans la précipitation à une urgence qui, une fois le recul pris, n'en était pas vraiment une.",
    exemple: "« Il faut que tu répondes maintenant, sinon l'occasion sera passée. » (alors que rien ne presse réellement)"
  },

  // ---- AXE 2 — CE QUI SE PRODUIT CHEZ LA CIBLE — Mécanismes d'attachement et de maintien dans la relation ----
  { cat: "Mécanismes d'attachement et de maintien dans la relation", mot: "Dépendance affective", icon: Heart, analyse: true,
    court: "Entretenir ton besoin de l'autre pour te retenir.",
    def: "La dépendance affective consiste à faire croire à quelqu'un qu'il ou elle ne pourrait pas vivre, être aimé·e ou heureux·se sans cette personne précise, pour la garder attachée.",
    effet: "On finit par croire qu'on ne mérite ou ne trouvera personne d'autre, ce qui rend le départ presque impensable.",
    exemple: "« Personne d'autre ne voudra jamais de toi, je suis le·la seul·e qui te comprenne. »"
  },
  { cat: "Mécanismes d'attachement et de maintien dans la relation", mot: "Emprise", icon: Link2, analyse: false,
    court: "Une domination progressive.",
    def: "L'emprise est une prise de pouvoir psychologique progressive sur une personne, qui réduit peu à peu sa liberté de penser et d'agir.",
    effet: "On perd en autonomie et on en vient à organiser sa vie autour de l'autre, souvent sans s'en apercevoir.",
    exemple: "Renoncer à ses amis, ses goûts, ses décisions pour éviter les conflits."
  },
  { cat: "Mécanismes d'attachement et de maintien dans la relation", mot: "Cycle de la violence", icon: RefreshCw, analyse: false,
    court: "Tension, crise, réconciliation, répétition.",
    def: "La violence relationnelle suit souvent un cycle : montée de tension, explosion, justification, puis phase d'apaisement (« lune de miel ») avant que tout recommence.",
    effet: "La phase d'apaisement entretient l'espoir que « ça va changer », ce qui rend le départ plus difficile.",
    exemple: "Une dispute violente suivie d'excuses et de promesses, puis d'une nouvelle montée de tension."
  },
  { cat: "Mécanismes d'attachement et de maintien dans la relation", mot: "Lune de miel", icon: Moon, analyse: false,
    court: "L'accalmie qui fait rester.",
    def: "Phase du cycle où la personne redevient attentionnée et promet de changer, juste après un épisode difficile.",
    effet: "On se raccroche à ces moments doux, en espérant qu'ils reviennent durablement.",
    exemple: "« Pardonne-moi, ça n'arrivera plus jamais, tu comptes tellement pour moi. »"
  },
  { cat: "Mécanismes d'attachement et de maintien dans la relation", mot: "Triangle de Karpman", icon: Repeat2, analyse: false,
    court: "Trois rôles qui s'échangent dans une relation qui tourne mal.",
    def: "Le triangle de Karpman décrit trois rôles qui peuvent s'alterner dans une relation en difficulté : victime, persécuteur et sauveur. Une même personne peut passer de l'un à l'autre au fil d'une même dispute. C'est une grille de lecture générale, pas un diagnostic à poser sur quelqu'un.",
    effet: "Comprendre ces rôles aide à voir le mécanisme d'une dispute, sans chercher qui est « le vrai méchant ».",
    exemple: "Une personne qui se sent victime d'une remarque peut devenir l'instant d'après persécutrice de celui ou celle qui l'a faite."
  },
  { cat: "Mécanismes d'attachement et de maintien dans la relation", mot: "Renforcement intermittent", icon: Repeat2, analyse: false,
    court: "Récompense imprévisible = attachement maximal.",
    def: "Le renforcement intermittent est un principe d'apprentissage : quand une récompense (affection, attention, bienveillance) est accordée de façon imprévisible, elle crée un attachement bien plus fort que si elle était systématique ou jamais accordée. C'est ce qui explique pourquoi les machines à sous sont addictives — et aussi pourquoi l'alternance émotionnelle rend si difficile de partir.",
    effet: "À chaque occasion, on croit « cette fois sera différent », ce qui entretient l'espoir et l'attachement même quand la balance globale est souffrante.",
    exemple: "Très affectueuse lundi, indifférente mardi, tendre jeudi — sans aucune logique discernable. À chaque bon moment, on renouvelle son espoir."
  },
  { cat: "Mécanismes d'attachement et de maintien dans la relation", mot: "Dissonance cognitive", icon: Brain, analyse: false,
    court: "Quand deux vérités s'opposent.",
    def: "La dissonance cognitive est l'inconfort ressenti quand nos actes et nos valeurs (ou deux croyances) se contredisent. On cherche alors à réduire cet écart.",
    effet: "Pour apaiser le malaise, on peut minimiser ce qu'on vit ou trouver des excuses à l'autre.",
    exemple: "« Il me blesse, mais je sais qu'au fond il m'aime. »"
  },
  { cat: "Mécanismes d'attachement et de maintien dans la relation", mot: "Lien traumatique", icon: Heart, analyse: false,
    court: "S'attacher à qui nous blesse.",
    def: "Le lien traumatique (trauma bonding) est un attachement puissant qui se forme dans l'alternance de violence et de réconfort, renforcé par les phases d'apaisement.",
    effet: "On reste très attaché malgré la souffrance, et la séparation paraît presque impossible.",
    exemple: "Se sentir incapable de partir, même en reconnaissant que la relation fait mal."
  },
  { cat: "Mécanismes d'attachement et de maintien dans la relation", mot: "Rationalisation", icon: Brain, analyse: false,
    court: "Excuser l'autre pour tenir.",
    def: "La rationalisation consiste à trouver des explications rassurantes aux comportements blessants de l'autre, pour rendre la situation supportable.",
    effet: "On excuse l'inexcusable et on reporte le moment de se protéger.",
    exemple: "« Il est stressé en ce moment, je comprends qu'il réagisse comme ça vu ce qu'il vit. »"
  },
  { cat: "Mécanismes d'attachement et de maintien dans la relation", mot: "Identification à l'agresseur", icon: User, analyse: false,
    court: "Adopter le point de vue de l'autre.",
    def: "L'identification à l'agresseur amène la personne à épouser le regard de celui qui la blesse, jusqu'à défendre ses comportements.",
    effet: "On justifie l'autre et on retourne la faute contre soi.",
    exemple: "« Au fond il a raison de s'énerver, c'est moi qui le pousse à bout. »"
  },

  // ---- Effets psychologiques et cognitifs ----
  { cat: "Effets psychologiques et cognitifs", mot: "Hypervigilance", icon: Eye, analyse: false,
    court: "Être en alerte permanente.",
    def: "L'hypervigilance est un état de vigilance extrême où l'on guette en continu les signes de danger ou de changement d'humeur de l'autre.",
    effet: "On vit dans la tension, épuisé·e d'anticiper les réactions.",
    exemple: "Scruter le ton d'un message pour deviner si « ça va aller » ce soir."
  },
  { cat: "Effets psychologiques et cognitifs", mot: "Charge mentale", icon: Brain, analyse: false,
    court: "Tout porter en silence.",
    def: "La charge mentale est le poids invisible de devoir penser, organiser et anticiper en permanence, souvent seul·e.",
    effet: "Elle épuise sans être visible, et le repos seul ne suffit plus à la soulager.",
    exemple: "Avoir l'esprit constamment occupé par ce qu'il faut gérer pour tout le monde."
  },
  { cat: "Effets psychologiques et cognitifs", mot: "Sentiment d'impuissance", icon: Battery, analyse: false,
    court: "Croire qu'on ne peut rien changer.",
    def: "À force de tentatives sans effet, on peut finir par croire qu'aucune action ne changera la situation — un sentiment d'impuissance acquise.",
    effet: "On cesse d'essayer, même quand des solutions existent réellement.",
    exemple: "« De toute façon, quoi que je dise, ça ne sert à rien. »"
  },
  { cat: "Effets psychologiques et cognitifs", mot: "Perte d'estime de soi", icon: User, analyse: false,
    court: "Ne plus se reconnaître de valeur.",
    def: "L'exposition répétée à la critique et au dénigrement peut éroder l'image qu'on a de soi et de ses capacités.",
    effet: "On doute de ses choix, on s'excuse beaucoup, on n'ose plus prendre de place.",
    exemple: "Penser systématiquement que les problèmes viennent de soi."
  },
  { cat: "Effets psychologiques et cognitifs", mot: "Dissociation", icon: EyeOff, analyse: false,
    court: "Se couper de ses émotions.",
    def: "La dissociation est un mécanisme de survie : face à un stress intense, l'esprit se « déconnecte » des émotions ou de la scène, comme pour se protéger.",
    effet: "On se sent spectateur·rice de sa propre vie, anesthésié·e.",
    exemple: "Pendant une dispute violente, se sentir « à côté », comme si ça arrivait à quelqu'un d'autre."
  },
  { cat: "Effets psychologiques et cognitifs", mot: "Sidération", icon: AlertTriangle, analyse: false,
    court: "Être figé·e face au choc.",
    def: "La sidération est un blocage psychologique face à un choc : le cerveau, submergé, empêche momentanément de réagir, de parler ou de fuir.",
    effet: "On « n'a rien pu dire ni faire » sur le moment — ce n'est pas de la faiblesse, c'est une réaction de survie.",
    exemple: "Rester figée, incapable de répondre, pendant une scène violente."
  },
  { cat: "Effets psychologiques et cognitifs", mot: "Vulnérabilité biocomportementale", icon: Battery, analyse: false,
    court: "La fatigue et le stress rendent plus vulnérable.",
    def: "La fatigue, la faim, le stress ou le manque de sommeil augmentent, chez n'importe qui, la vulnérabilité à la pression ou à la manipulation. Ce n'est pas un mécanisme utilisé contre quelqu'un, mais un état à connaître pour se déculpabiliser.",
    effet: "On cède plus facilement à un moment de faiblesse passager — ce n'est pas un manque de caractère.",
    exemple: "Après une nuit blanche, accepter quelque chose qu'on aurait refusé les jours précédents."
  },

  // ---- Biais cognitifs favorisant la prise ou le maintien ----
  { cat: "Biais cognitifs favorisant la prise ou le maintien", mot: "Biais de confirmation", icon: Check, analyse: false,
    court: "Ne voir que ce qui confirme.",
    def: "Le biais de confirmation pousse à remarquer surtout les informations qui confortent ce qu'on croit déjà, et à écarter le reste.",
    effet: "On peut s'accrocher à l'image positive de l'autre en ignorant les signaux qui dérangent.",
    exemple: "Retenir les gestes tendres et oublier les épisodes blessants."
  },
  { cat: "Biais cognitifs favorisant la prise ou le maintien", mot: "Coûts irrécupérables", icon: Hourglass, analyse: false,
    court: "Rester à cause de ce qu'on a investi.",
    def: "Le biais des coûts irrécupérables (ou « biais d'engagement ») pousse à continuer une relation parce qu'on y a déjà consacré beaucoup de temps, d'énergie ou d'amour — comme si partir « gâchait » cet investissement.",
    effet: "On reste pour ne pas « avoir tout fait pour rien », même quand la relation fait souffrir.",
    exemple: "« Après dix ans ensemble, je ne peux pas partir maintenant. »"
  },
  { cat: "Biais cognitifs favorisant la prise ou le maintien", mot: "Effet de halo", icon: Sparkles, analyse: false,
    court: "Une qualité en masque le reste.",
    def: "L'effet de halo fait qu'une impression positive (charme, réussite) déteint sur tout le reste, au point d'excuser des comportements problématiques.",
    effet: "On a du mal à croire que quelqu'un d'apprécié de tous puisse faire du mal en privé.",
    exemple: "« Il est si gentil avec les autres, le souci vient sûrement de moi. »"
  },
  { cat: "Biais cognitifs favorisant la prise ou le maintien", mot: "Biais d'optimisme", icon: Sparkles, analyse: false,
    court: "Croire que ça va s'arranger.",
    def: "Le biais d'optimisme conduit à surestimer la probabilité que les choses s'améliorent d'elles-mêmes.",
    effet: "On reporte les décisions, en attendant un changement qui ne vient pas.",
    exemple: "« Ça va se calmer, c'est juste une période difficile. »"
  },
  { cat: "Biais cognitifs favorisant la prise ou le maintien", mot: "Ancrage", icon: Anchor, analyse: false,
    court: "Rester fixé sur la première impression.",
    def: "L'ancrage fait que la première information reçue (le « vrai » début de la relation, une promesse) sert de référence et pèse trop lourd dans le jugement.",
    effet: "On compare sans cesse au « début », en espérant retrouver cette version idéalisée.",
    exemple: "« Au début il était parfait, je sais qu'il peut redevenir comme ça. »"
  },
  { cat: "Biais cognitifs favorisant la prise ou le maintien", mot: "Aversion à la perte", icon: Hourglass, analyse: false,
    court: "La peur de perdre pèse très lourd.",
    def: "L'aversion à la perte fait que la crainte de perdre quelque chose pèse plus lourd, dans nos décisions, que l'envie de gagner l'équivalent.",
    effet: "On reste ou on cède pour ne pas perdre ce qu'on a déjà investi.",
    exemple: "« Si tu pars, tu perdras tout ce qu'on a construit ensemble. »"
  },
  { cat: "Biais cognitifs favorisant la prise ou le maintien", mot: "Cadrage", icon: RefreshCw, analyse: false,
    court: "La formulation change la décision.",
    def: "Le cadrage présente la même réalité sous un angle choisi pour orienter la décision (« ce n'est pas du contrôle, c'est de l'attention »).",
    effet: "On accepte une chose formulée joliment qu'on aurait refusée dite crûment.",
    exemple: "« Ce n'est pas de la jalousie, c'est parce que je t'aime. »"
  },
  { cat: "Biais cognitifs favorisant la prise ou le maintien", mot: "Habituation", icon: Repeat, analyse: false,
    court: "L'anormal devient « normal ».",
    def: "À force de répétition, des comportements anormaux finissent par sembler ordinaires : le seuil de tolérance monte sans qu'on s'en aperçoive.",
    effet: "On minimise des faits graves parce qu'ils sont devenus habituels.",
    exemple: "« C'est rien, on se dispute comme ça tous les jours, c'est normal. »"
  },
  { cat: "Biais cognitifs favorisant la prise ou le maintien", mot: "Illusion de contrôle", icon: Target, analyse: true,
    court: "Croire qu'être parfaite fera changer l'autre.",
    def: "L'illusion de contrôle fait croire que si l'on se comporte parfaitement, l'autre finira par changer ou par arrêter ses comportements blessants.",
    effet: "On s'épuise à « bien faire », en portant une responsabilité qui n'est pas la sienne.",
    exemple: "« Si je fais tout ce qu'il me demande bien comme il faut, il arrêtera. »"
  },
  { cat: "Biais cognitifs favorisant la prise ou le maintien", mot: "Conformisme", icon: Users, analyse: false,
    court: "Suivre le groupe.",
    def: "Le conformisme pousse à s'aligner sur le groupe, à ne pas contredire, surtout quand l'entourage soutient la personne qui manipule.",
    effet: "On tait ses doutes et on se sent seul·e à voir le problème.",
    exemple: "Ne pas oser critiquer devant les amis communs qui « l'adorent »."
  },
  { cat: "Biais cognitifs favorisant la prise ou le maintien", mot: "Croyance en un monde juste", icon: Scale, analyse: false,
    court: "Penser que chacun mérite son sort.",
    def: "Ce biais fait croire que le monde est juste et que, si quelqu'un souffre, c'est qu'il ou elle l'a « mérité » — ce qui conduit à blâmer les victimes.",
    effet: "On se blâme soi-même pour ce qu'on subit.",
    exemple: "« Si ça m'arrive, c'est peut-être que je l'ai cherché. »"
  },
  { cat: "Biais cognitifs favorisant la prise ou le maintien", mot: "Erreur d'attribution", icon: User, analyse: false,
    court: "Juger l'être, pas le contexte.",
    def: "L'erreur fondamentale d'attribution consiste à expliquer les actes d'une personne par sa personnalité plutôt que par la situation (« elle est faible » plutôt que « elle est prise dans une emprise »).",
    effet: "On juge durement les victimes au lieu de comprendre le mécanisme qui les piège.",
    exemple: "« Si elle reste, c'est qu'elle est faible. » (alors que l'emprise explique tout autrement)"
  },
  { cat: "Biais cognitifs favorisant la prise ou le maintien", mot: "Disponibilité", icon: Brain, analyse: false,
    court: "Se souvenir de ce qui vient facilement à l'esprit.",
    def: "Le biais de disponibilité fait juger une situation ou une personne d'après les exemples qui viennent le plus facilement en tête, plutôt que d'après l'ensemble des faits.",
    effet: "On se souvient surtout de l'épisode le plus marquant (bon ou mauvais) et on généralise à partir de lui.",
    exemple: "« Souviens-toi de la fois où tu t'es trompée — tu te trompes tout le temps. »"
  },
  { cat: "Biais cognitifs favorisant la prise ou le maintien", mot: "Biais du statu quo", icon: Anchor, analyse: false,
    court: "Préférer ne rien changer.",
    def: "Le biais du statu quo pousse à préférer une situation connue, même insatisfaisante, plutôt que de prendre le risque d'un changement — même quand rester coûte plus cher que partir.",
    effet: "On supporte une situation difficile parce qu'elle est familière, plutôt que d'affronter l'inconnu d'un changement.",
    exemple: "« Au moins je sais à quoi m'attendre ici, ailleurs je ne sais pas. »"
  },
];
