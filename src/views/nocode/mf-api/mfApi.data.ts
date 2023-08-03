import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";

/**
 * @description: 自定义API
 * @author: mfish
 * @date: 2023-07-28
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "名称",
    dataIndex: "name",
    width: 120
  },
  {
    title: "参数类型",
    dataIndex: "paramFlag",
    width: 120
  },
  {
    title: "创建时间",
    dataIndex: "createTime",
    width: 120
  },
  {
    title: "创建人",
    dataIndex: "createBy",
    width: 120
  }
];
export const searchFormSchema: FormSchema[] = [
  {
    field: "name",
    label: "API名称",
    component: "Input",
    colProps: { lg: 4, md: 5 }
  },
  {
    field: "sourceType",
    label: "数据来源类型 DB 数据库 FILE文件 API 接口",
    component: "Input",
    colProps: { lg: 4, md: 5 }
  },
  {
    field: "folderId",
    label: "目录id",
    component: "Input",
    colProps: { lg: 4, md: 5 }
  }
];
export const mfApiFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false
  },
  {
    field: "name",
    label: "API名称",
    component: "Input"
  },
  {
    field: "folderId",
    label: "目录id",
    component: "Input"
  },
  {
    field: "sourceId",
    label: "数据来源id",
    component: "Input"
  },
  {
    field: "sourceType",
    label: "数据来源类型 DB 数据库 FILE文件 API 接口",
    component: "Input"
  },
  {
    field: "remark",
    label: "描述",
    component: "Input"
  },
  {
    field: "sourceSql",
    label: "数据源SQL（原生查询方式存储）",
    component: "Input"
  },
  {
    field: "config",
    label: "API配置信息",
    component: "Input"
  },
  {
    field: "delFlag",
    label: "删除标签",
    component: "Input"
  },
  {
    field: "queryType",
    label: "查询方式 0 自定义查询 1原生查询",
    component: "Input"
  },
  {
    field: "tenantId",
    label: "租户ID",
    component: "Input"
  }
];
