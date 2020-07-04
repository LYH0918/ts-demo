<template>
    <div>
        <!-- <div v-for='item in columns' :key='item.prop'>
            <span v-if='!item.render'>{{item.label}}</span>
            <renderTpl :text="item.label" :render='item.render' :column="item" v-else></renderTpl>
            
        </div> -->
        <render-table :columns="tableColumns" :tableData="tableData"></render-table>
    </div>
</template>

<script lang='ts'>
    import { Component, Vue, Prop } from 'vue-property-decorator';
    import renderTable from '@/components/Table.vue';
    const renderTpl = {
        functional: true,
        props: {
            text: {
                type: String,
                default: 'bibi',
            },
            render: {
                type: Function,
            },
            column: {
                type: Object,
                default: {
                    label: '1',
                    prop: '1',
                },
            },
        },
        render: (h: (a: string, b: object, c: string | any[]) => any, data: any) => {
            return data.props.render(h, data.props.column);
        },
    };
    
    @Component({
        components: { renderTpl, renderTable },
    })
    export default class Render extends Vue {
        private text: string = 'haha';
        private columns: object[] = [
            {prop: 'col1', label: '列1'},
            {
                prop: 'col2', label: '列2',
                render: (h: (a: string, b: object, c: string | any[]) => any, props: { label: string, prop: any }) => {
                    return h('span', { style: {color: 'blue'} }, props.label);
                },
            },
        ];
        private tableColumns: any[] = [{
            label: '列一',
            prop: 'col1',
            width: 300,
        }, {
            label: '列二',
            prop: 'col2',
            width: 300,
            render: (h: (a: string, b: object, c: string | any[]) => any, row: any) => {
                return h('div', {style: { color: 'blue'}}, [
                    h('div', {}, row.col2),
                    h('div', {}, row.col2),
                ]);
            },
        }, {
            label: '操作',
            prop: 'operation',
            render: (h: (a: string, b: object, c: string | any[]) => any, row: any) => {
                return h('span', {style: { color: 'red'}}, '操作');
            },
        }];
        private tableData: any[] = [{
            col1: '哈哈',
            col2: '呵呵',
        }];
    }
    // console.log(renderTpl)
</script>