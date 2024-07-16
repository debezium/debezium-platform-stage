export class LayoutGroup {
    constructor(node, padding, index) {
        this.leaves = [];
        this.groups = [];
        this.node = node;
        this.padding = padding;
        this.index = index;
    }
    get element() {
        return this.node;
    }
    get id() {
        return this.node.getId();
    }
}
//# sourceMappingURL=LayoutGroup.js.map