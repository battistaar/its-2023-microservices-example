import { applyDecorators } from "@nestjs/common";
import { EventPattern as OriginalEventPattern } from "@nestjs/microservices";
import { MessagePattern as OriginalMessagePattern } from "@nestjs/microservices";

export type MessageConfig<P = unknown, R = unknown> = {
  identifier: string,
  payloadType: new () => P,
  responseType: new () => R
}

export type EventConfig<P = unknown> = {
  identifier: string,
  payloadType: new () => P
}

export interface EventsDefinition {
  [key: string]: EventConfig<unknown>;
}

export interface MessagesDefinition {
  [key: string]: MessageConfig;
}

type EventHandler<P, R> = (payload: P) => Promise<R>;

export type IEventPattern<T> = (
  // eslint-disable-next-line @typescript-eslint/ban-types
  target: Object,
  propertyKey: string | symbol,
  descriptor: TypedPropertyDescriptor<EventHandler<T, void>>,
) => TypedPropertyDescriptor<EventHandler<T, void>> | void

export type IMessagePattern<T, R> = (
  // eslint-disable-next-line @typescript-eslint/ban-types
  target: Object,
  propertyKey: string | symbol,
  descriptor: TypedPropertyDescriptor<EventHandler<T, R>>,
) => TypedPropertyDescriptor<EventHandler<T, R>>

export const clientEventDecoratorFactory = (definitions: EventsDefinition, prefix: string) => {
  return <P>(event: EventConfig<P>) => {
    if (!Object.values<EventConfig>(definitions).includes(event)) {
      throw new Error('Invalid event definition')
    }
    return applyDecorators(OriginalEventPattern(`${prefix}_${event.identifier}`)) as IEventPattern<P>
  }
}

export const clientMessageDecoratorFactory = (definitions: MessagesDefinition, prefix: string) => {
  return <P, R>(event: MessageConfig<P, R>) => {
    if (!Object.values<MessageConfig>(definitions).includes(event)) {
      throw new Error('Invalid message definition')
    }
    return applyDecorators(OriginalMessagePattern({cmd: `${prefix}_${event.identifier}`})) as IMessagePattern<P, R>
  }
}
