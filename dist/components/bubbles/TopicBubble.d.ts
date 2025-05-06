import { MessageType } from '../Bot';
type TopicBubbleProps = {
    message: MessageType;
    renderHTML?: boolean;
    botMessage?: {
        backgroundColor?: string;
        textColor?: string;
        showAvatar?: boolean;
        avatarSrc?: string;
    };
    fontSize?: number;
    handleSubmit: (message: string, payload: any, humanInput: any, questionData: any) => void;
};
export declare const TopicBubble: (props: TopicBubbleProps) => import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=TopicBubble.d.ts.map