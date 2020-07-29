<template>
    <div>
        <el-table :data='tableData' v-bind="$attrs" v-on="$listeners" :header-cell-style='headerStyle'>
            <el-table-column
                v-for='(column,index) in columns'
                :key='index'
                :label='column.label'
                :width="column.width"
                v-bind="$attrs"
                :fixed="column.fixed"
                v-on="$listeners">
                <template slot-scope="scope">
                    <span v-if='!column.render'>{{scope.row[column.prop]}}</span>
                    <custom-col
                        v-else
                        :row='scope.row'
                        :render='column.render'
                    ></custom-col>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script lang='ts'>
    import { Component, Vue, Prop } from 'vue-property-decorator';
    type RenderFun = (label: string, attribute: object, content: string | any[]) => any;
    const customCol = {
        functional: true,
        props: {
            row: {
                type: Object,
                default() {
                    return {};
                },
            },
            render: {
                type: Function,
                default() {
                    return (h: RenderFun, row: any) => {
                        return h('span', {}, row.label);
                    };
                },
            },
        },
        render: (h: RenderFun, data: any) => {
            return data.props.render(h, data.props.row);
        },
    };
    @Component({
        components: { customCol },
    })
    export default class Table extends Vue {
        @Prop({ default: [] })
        private columns: any[];

        @Prop({ default: [] })
        private tableData: any[];

        @Prop({ default: () => {
            return {
                color: '#333',
                backgroundColor: '#F6F6F6',
                padding: '10px 0',
            };
        } })
        private headerStyle: () => any;
    }
</script>

<style scoped lang='scss'></style>
