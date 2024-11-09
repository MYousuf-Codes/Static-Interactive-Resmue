/// <reference types="jquery" />
interface JQuery {
    repeater: any;
  }

declare namespace JQuery {
    interface RepeaterOptions {
        initEmpty?: boolean;
        defaultValues?: Record<string, any>;
        show?: (this: HTMLElement) => void;
        hide?: (this: HTMLElement, deleteElement: () => void) => void;
        isFirstItemUndeletable?: boolean;
    }

    interface JQuery {
        repeater(options?: RepeaterOptions): JQuery;
    }
}
